import type { IMessageState } from '@/server/types/messages';
import type { Ref } from 'vue';

export interface IMessagesDetails {
  items: any;
  isLoading: Ref<boolean>;
  isSaving: Ref<boolean>;
  getUsersMessages(): Promise<void>;
  createMessage({ body }: { body: IMessageState }): Promise<void>;
}
