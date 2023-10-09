import type { Ref } from "vue";

export interface IUserInfo {
  getUser: any,
  loading: Ref<boolean>,
  error: Ref<Record<string, boolean | string>>,
  loginUser(): Promise<void>
}