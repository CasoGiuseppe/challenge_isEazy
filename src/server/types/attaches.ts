export interface IAttachState {
  id: UniqueId ;
  item: IAttachType;
}

export interface IAttachType {
  version: string,
  title: string,
  info: string,
  url: string,
  date: Date
}