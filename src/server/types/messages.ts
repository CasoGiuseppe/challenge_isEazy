export interface IMessageState {
  user: string;
  type?: string;
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