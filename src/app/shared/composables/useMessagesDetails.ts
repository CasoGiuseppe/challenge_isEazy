import type { IMessagesDetails } from './interfaces/useMessagesDetails';
import type { IHttpRequestService } from '@shared/providers/http/http.interface';
import { ref } from 'vue';
import type { IMessageState } from '@/server/types/messages';
import { MessageViewModel } from './views-model/messagesDetails.view';
import type { IMessagesStoreState } from '@shared/stores/messages/definitions';

export default function useMessagesDetais(client: IHttpRequestService): IMessagesDetails {
  const isSaving = ref<boolean>(false);

  const getUsersMessages = async (): Promise<IMessagesStoreState[]> => {
    try {
      isSaving.value = true;
      
      // 1. get from API messages list
      const result = await client.get<IMessageState[]>(
        `${import.meta.env.VITE_APP_API_NAMESPACE}/messages`
      );

      // 2. return array of message instance for viwemodel
      return result.map((node) => MessageViewModel.createMessageViewModel(node).viewMessage);
    } catch (e) {
      throw new Error(e as string);
    } finally {
      isSaving.value = false;
    }
  };

  const createMessage = async ({ body }: { body: IMessageState }): Promise<IMessagesStoreState[]> => {
    try {
      isSaving.value = true;
      
      // 1. post new comment in db
      const postedMessage = await client.post<IMessageState[]>(
        `${import.meta.env.VITE_APP_API_NAMESPACE}/messages/create`,
        body
      );

      // 2. return array of message instance for viwemodel
      return postedMessage.map((node) => MessageViewModel.createMessageViewModel(node).viewMessage);
    } catch (e) {
      throw new Error(e as string);
    } finally {
      isSaving.value = false;
    }
  };

  return {
    isSaving,
    getUsersMessages,
    createMessage
  };
}
