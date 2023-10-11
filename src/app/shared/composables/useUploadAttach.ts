import type { IAttachState } from '@/server/types/attaches';
import type { IHttpRequestService } from '@shared/providers/http/http.interface';
import type { IAttaches } from './interfaces/useAttach';
import { UploadAttachViewModel } from './views-model/uploadAttach.view';

export default function useUploadAttachexport(client: IHttpRequestService): IAttaches {
  const getUsersAttaches = async (): Promise<void> => {
    try {
      // 2. get from API attaches list
      const result = await client.get<IAttachState[]>(
        `${import.meta.env.VITE_APP_API_NAMESPACE}/attaches`
      );

      console.log(result.map((node) => UploadAttachViewModel.createUploadAttachViewModel(node).viewUploadAttach));
    } catch (e) {
      throw new Error(e as string);
    }
  };

  return {
    getUsersAttaches
  };
}
