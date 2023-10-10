import { ListType } from '@shared/types/definitions';
export interface IMessageState {
  id: string;
  user: string;
  type?: ListType;
  item: ITextType | IAttachType | {};
}

export interface ITextType {
  text: string,
  date: Date
}

export interface IAttachType {
  version: string,
  title: string,
  info: string,
  url: string,
  date: Date
}