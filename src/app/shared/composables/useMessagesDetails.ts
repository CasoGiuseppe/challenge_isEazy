import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import type { MessageStore } from '@shared/stores/messages';
import type { IMessagesDetails } from './interfaces/useMessagesDetails';
import type { IHttpRequestService } from '@shared/providers/http/http.interface';
import type { IMessageState } from '@/server/types/messages';
import { MessageViewModel } from './views-model/messagesDetails.view';
import { sortByDate } from '../helpers';

export default function useMessagesDetais(
  store: MessageStore,
  client: IHttpRequestService
): IMessagesDetails {
  const { saveMessage } = store;
  const isLoading = ref<boolean>(false);

  const getUsersMessages = async (): Promise<void> => {
    try {
      // 1. set loading && error state
      isLoading.value = true;

      // 2. get from API user attrs
      const result = await client.get<IMessageState[]>(
        `${import.meta.env.VITE_APP_API_NAMESPACE}/messages`
      );

      const mapped = sortByDate({array: result}).map((node) => MessageViewModel.createMessageViewModel(node).viewMessage)

      console.log(sortByDate({array: result}));
      // 3. add type key to detect item typology
      // 4. save local store with recovery messages
      mapped.forEach((item: IMessageState) => saveMessage(item));
    } catch (e) {
      /* empty */
    } finally {
      isLoading.value = false;
    }
  };

  return {
    items: storeToRefs(store).getMessages,
    isLoading,
    getUsersMessages
  };
}
