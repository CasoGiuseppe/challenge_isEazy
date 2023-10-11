import type { IAttachState } from '@/server/types/attaches';
import type { IHttpRequestService } from '@shared/providers/http/http.interface';
import type { AttachStore } from '@shared/stores/attaches';
import type { IAttaches } from './interfaces/useAttach';

export default function useUploadAttachexport(
  store: AttachStore,
  client: IHttpRequestService
): IAttaches {
  const { saveAttach } = store;

  const getUsersAttaches = async (): Promise<void> => {
    try {
      // 2. get from API attaches list
      const result = await client.get<IAttachState[]>(
        `${import.meta.env.VITE_APP_API_NAMESPACE}/attaches`
      );

      console.log(result);
    } catch(e) {
      throw new Error(e as string);
    }
  }

  return {
    getUsersAttaches
  }
}