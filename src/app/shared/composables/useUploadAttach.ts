import { ref } from 'vue';
import type { IAttachFile, IAttachState } from '@/server/types/attachments';
import type { IHttpRequestService } from '@shared/providers/http/http.interface';
import type { IUploadAttachStoreState } from '@shared/stores/attachments/definitions';
import type { IAttachments } from './interfaces/useAttach';
import { UploadAttachViewModel } from './views-model/uploadAttach.view';

export default function useUploadAttachexport(client: IHttpRequestService): IAttachments {
  const isUpload = ref<boolean>(false);

  const getUsersAttachments = async (): Promise<IUploadAttachStoreState[]> => {
    try {
      // 2. get from API attachments list
      const result = await client.get<IAttachState[]>(
        `${import.meta.env.VITE_APP_API_NAMESPACE}/attachments`
      );

      return result.map(
        (node) => UploadAttachViewModel.createUploadAttachViewModel(node).viewUploadAttach
      );
    } catch (e) {
      throw new Error(e as string);
    }
  };

  const uploadFile = async ({
    body
  }: {
    body: IAttachFile;
  }): Promise<IUploadAttachStoreState[]> => {
    try {
      isUpload.value = true;
      
      const { name, size, type, date } = body;
      // 1. post new file in db
      const uploadFile = await client.post<IAttachState[]>(
        `${import.meta.env.VITE_APP_API_NAMESPACE}/attachments/create`,
        { item: { title: name, size, type, date } }
      );

      // 2. return array of attachments instance for viwemodel
      return uploadFile.map(
        (node) => UploadAttachViewModel.createUploadAttachViewModel(node).viewUploadAttach
      );
    } catch (e) {
      throw new Error(e as string);
    } finally {
      isUpload.value = false;
    }
  };

  return {
    isUpload,
    getUsersAttachments,
    uploadFile
  };
}
