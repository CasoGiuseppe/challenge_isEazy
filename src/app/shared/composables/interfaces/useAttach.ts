import type { Ref } from "vue";
import type { IUploadAttachStoreState } from "@shared/stores/attachments/definitions";
import type { IAttachFile } from "@/server/types/attachments";

export interface IAttachments {
  isUpload: Ref<boolean>;
  getUsersAttachments(): Promise<IUploadAttachStoreState[]>;
  uploadFile({ body }: { body: IAttachFile }): Promise<IUploadAttachStoreState[]>
}