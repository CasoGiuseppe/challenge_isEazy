export interface IAttachState {
  id: UniqueId ;
  item: IAttachType;
}

export interface IAttachType {
  version: string,
  title: string,
  type: string,
  size: string,
  url: string,
  date: Date
}