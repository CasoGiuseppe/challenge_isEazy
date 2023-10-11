import type { IAttachState, IAttachType } from "@/server/types/attaches";
import type { IUploadAttachStoreState } from "@shared/stores/attaches/definitions";

export class UploadAttachViewModel {
  private constructor(
    public readonly id: UniqueId,
    public readonly item: IAttachType,
  ) {}

  static createUploadAttachViewModel(userAttach: IAttachState) {
    const { id, item } = userAttach;
    return new UploadAttachViewModel( id, item );
  }

  get viewUploadAttach(): IUploadAttachStoreState {
    const { size, type, version, ...rest} = this.item
    return {
      id: this.id,
      item: {...rest, version: `Version ${version}`, info: `Documento/${type} (${size})`}
    };
  }
}