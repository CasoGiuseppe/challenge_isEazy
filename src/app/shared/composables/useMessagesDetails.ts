import { storeToRefs } from 'pinia';
import type { MessageStore } from '@shared/stores/messages';
import type { IMessagesDetails } from './interfaces/useMessagesDetails';
import type { IHttpRequestService } from '@shared/providers/http/http.interface';
import type { IMessageState } from '@/server/types/messages';
import { ref } from 'vue';

export default function useMessagesDetais(
  store: MessageStore,
  client: IHttpRequestService
): IMessagesDetails {
  const isLoading = ref<boolean>(false);

  const getUsersMessages = async (): Promise<IMessageState | undefined> => {
    try {
      // 1. set loading && error state
      isLoading.value = true;

      // 2. get from API user attrs
      return await client.get<IMessageState>(`${import.meta.env.VITE_APP_API_NAMESPACE}/messages`);
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
