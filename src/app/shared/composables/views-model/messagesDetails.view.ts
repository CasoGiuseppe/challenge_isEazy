import type { IMessageState, ITextType } from '@/server/types/messages';
import { ListType } from '@shared/types/definitions';
import type { IMessagesStoreState } from '@shared/stores/messages/definitions';

const isTextMessage = (value: any): value is ITextType => !!value?.text;
export class MessageViewModel {
  private constructor(
    public readonly id: UniqueId,
    public readonly user: string,
    public readonly picture: string,
    public readonly item: ITextType,
  ) {}

  static createMessageViewModel(userMessage: IMessageState) {
    const { id, user, picture, item } = userMessage;
    return new MessageViewModel( id, user, picture, item );
  }

  get viewMessage(): IMessagesStoreState {
    return {
      id: this.id,
      picture: this.picture,
      user:  this.user,
      item: this.item,
      type: isTextMessage(this.item) ? ListType.MESSAGE : ListType.ATTACH
    };
  }
}
