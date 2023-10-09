import type { Ref } from "vue";

export interface IUserInfo {
  getUser: any,
  isLoading: Ref<boolean>,
  hasError: Ref<Record<string, boolean | string>>,
  isSuccess: Ref<boolean>,
  signIn({ email, password}: { email: string, password: string}): Promise<void>
}