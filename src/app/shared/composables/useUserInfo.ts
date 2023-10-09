import { storeToRefs } from 'pinia';
import type { UserStore } from '@shared/stores/user';
import type { IUserInfo } from './interfaces/useUserInfo';
import type { IHttpRequestService } from '@shared/providers/http/http.interface';

export default function useUserInfo(store: UserStore, client: IHttpRequestService): IUserInfo {
  const { getUser } = storeToRefs(store);
  const { id: userID, name } = getUser.value;

  const saveUser = async (): Promise<void> => {
    try {
      await client.get(`${import.meta.env.VITE_APP_API_NAMESPACE}/user`, {
        email: `${import.meta.env.VITE_APP_LOGIN_EMAIL}`,
        password: `${import.meta.env.VITE_APP_LOGIN_PASSWORD}`
      });
    } catch (error) {
      console.log("error", error)
    }
  };

  return {
    userID,
    name,
    saveUser
  };
}
