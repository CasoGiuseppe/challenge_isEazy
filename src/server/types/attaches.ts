export interface IAttachState {
  id: UniqueId ;
  item: IAttachType;
}

export interface IAttachType {
  version: number,
  title: string,
  type: string,
  size: number,
  date: Date
}

export interface IAttachFile {
  name: string,
  size: number,
  type: string,
  date: Date
}