import type { Ref } from "vue";
import type { IUploadAttachStoreState } from "@shared/stores/attaches/definitions";
import type { IAttachFile } from "@/server/types/attaches";

export interface IAttaches {
  isUpload: Ref<boolean>;
  getUsersAttaches(): Promise<IUploadAttachStoreState[]>;
  uploadFile({ body }: { body: IAttachFile }): Promise<IUploadAttachStoreState[]>
}