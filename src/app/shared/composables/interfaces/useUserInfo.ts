import type { Ref } from "vue";

export interface IUserInfo {
  getUser: any,
  loading: Ref<boolean>,
  error: Ref<Record<string, boolean | string>>,
  signIn({ email, password}: { email: string, password: string}): Promise<void>
}