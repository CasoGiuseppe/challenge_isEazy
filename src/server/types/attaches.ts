export interface IMessageState {
  item: IAttachType | {};
  id?: UniqueId ;
}

export interface IAttachType {
  version: string,
  title: string,
  info: string,
  url: string,
  date: Date
}