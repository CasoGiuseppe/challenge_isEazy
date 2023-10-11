export interface IAttachState {
  id: UniqueId ;
  item: IAttachType;
}

export interface IAttachType {
  version: number,
  title: string,
  type: string,
  size: string,
  url: string,
  date: Date
}