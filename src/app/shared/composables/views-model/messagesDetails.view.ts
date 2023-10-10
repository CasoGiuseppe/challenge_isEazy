import type { IAttachType, IMessageState, ITextType } from '@/server/types/messages';
import { ListType } from '@shared/types/definitions';

const isTextMessage = (value: any): value is ITextType => !!value?.text;

export class MessageViewModel {
  private constructor(
    public readonly id: string,
    public readonly picture: string | undefined,
    public readonly user: string,
    public readonly item: ITextType | IAttachType | {}
  ) {}

  static createMessageViewModel(userMessage: IMessageState) {
    const { id, picture, user, item } = userMessage;
    return new MessageViewModel(id, picture, user, item);
  }

  get viewMessage() {
    return {
      id: this.id,
      picture: this.picture,
      user: this.user,
      item: this.item,
      type: isTextMessage(this.item) ? ListType.MESSAGE : ListType.ATTACH
    };
  }
}
