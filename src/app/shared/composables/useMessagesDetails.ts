import { storeToRefs } from 'pinia';
import type { MessageStore } from '@shared/stores/messages';
import type { IMessagesDetails } from './interfaces/useMessagesDetails';
import type { IHttpRequestService } from '@shared/providers/http/http.interface';
import type { IMessageState, ITextType } from '@/server/types/messages';
import { ListType } from '@shared/types/definitions';
import { ref } from 'vue';

const isTextMessage = (value: any): value is ITextType => !!value?.text;

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
      const result = await client.get<IMessageState[]>(`${import.meta.env.VITE_APP_API_NAMESPACE}/messages`);

      // 3. add type key to detect item typology
      const addTyeToResult = result.map(node => {
        return {
          ...node,
          type: isTextMessage(node.item) ? ListType.MESSAGE : ListType.ATTACH
        }
      })

      // 4. save local store with API recovery messages
      addTyeToResult.forEach((item: IMessageState) => saveMessage(item))
      
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
