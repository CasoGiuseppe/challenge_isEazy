import type { Ref } from "vue";

export interface IMessagesDetails {
  items: any,
  isLoading: Ref<boolean>,
  getUsersMessages(): Promise<void>
}