export interface IUploadAttachStoreState {
  id: UniqueId;
  item: IUploadAttachItemStore
}

export interface IUploadAttachItemStore {
  version: string,
  title: string,
  info: string,
  date: Date
}