import type { Ref } from 'vue';
import type { IMessageState } from '@/server/types/messages';
import type { IMessagesStoreState } from '@shared/stores/messages/definitions';

export interface IMessagesDetails {
  isSaving: Ref<boolean>;
  getUsersMessages(): Promise<IMessagesStoreState[]>;
  createMessage({ body }: { body: IMessageState }): Promise<IMessagesStoreState[]>;
}
