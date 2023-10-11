export interface IUploadAttachStoreState {
  id: UniqueId;
  item: IUploadAttachItemStore
}

export interface IUploadAttachItemStore {
  version: string,
  title: string,
  info: string
  url: string,
  date: Date
}