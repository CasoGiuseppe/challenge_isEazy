import type { IUploadAttachStoreState } from "@shared/stores/attaches/definitions";

export interface IAttaches {
  getUsersAttaches(): Promise<IUploadAttachStoreState[]>;
}