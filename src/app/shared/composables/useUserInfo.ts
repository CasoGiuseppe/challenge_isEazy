import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import type { UserStore } from '@shared/stores/user';
import type { IUserInfo } from './interfaces/useUserInfo';
import type { IHttpRequestService } from '@shared/providers/http/http.interface';
import type { IUserState } from '@/server/types/users';

export default function useUserInfo(store: UserStore, client: IHttpRequestService): IUserInfo {
  const { setUser } = store;
  const loading = ref<boolean>(false);
  const error = ref<Record<string, boolean | string>>({ state: false, message: ''});
  
  const loginUser = async (): Promise<void> => {
    try {
      loading.value = true;
      const { id, name, surname, picture } = await client.get<IUserState>(
        `${import.meta.env.VITE_APP_API_NAMESPACE}/user`,
        {
          email: `${import.meta.env.VITE_APP_LOGIN_EMAIL}`,
          password: `${import.meta.env.VITE_APP_LOGIN_PASSWORD}`
        }
      );

      setUser({ id, name, surname, picture });
    } catch (e) {
      error.value = { state: true, message: 'Username or pawword incorrects'}
      return 
    } finally {
      loading.value = false;
    }
  };

  return {
    getUser: storeToRefs(store).getUser,
    loading,
    error,
    loginUser
  };
}
