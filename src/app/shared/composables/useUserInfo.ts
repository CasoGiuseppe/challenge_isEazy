import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import type { UserStore } from '@shared/stores/user';
import type { IUserInfo } from './interfaces/useUserInfo';
import type { IHttpRequestService } from '@shared/providers/http/http.interface';
import type { IUserState } from '@/server/types/users';
import { UserViewModel } from './views-model/userInfo.view';

export default function useUserInfo(store: UserStore, client: IHttpRequestService): IUserInfo {
  const { saveUser } = store;
  const isLoading = ref<boolean>(false);
  const isSuccess = ref<boolean>(false);
  const hasError = ref<Record<string, boolean | string>>({ state: false, message: '' });

  const signIn = async ({
    email,
    password
  }: {
    email: string;
    password: string;
  }): Promise<void> => {
    try {
      // 1. set loading && error state
      isLoading.value = true;
      hasError.value = { state: false, message: '' };

      // 2. get from API user attrs
      const {
        id,
        name,
        surname,
        picture,
        email: mail
      } = await client.get<IUserState>(`${import.meta.env.VITE_APP_API_NAMESPACE}/user`, {
        email,
        password
      });

      // 3. set local store with logged user params
      saveUser(UserViewModel.createUserViewModel({id, name, surname, picture, email}).viewUser);

      // 4. set success state
      isSuccess.value = true;
    } catch (e) {
      // 4. handle error
      hasError.value = { state: true, message: 'Username or pawword incorrects' };
      return;
    } finally {
      // 5. reset loading state
      isLoading.value = false;
    }
  };

  return {
    getUser: storeToRefs(store).getUser,
    isLoading,
    isSuccess,
    hasError,
    signIn
  };
}
