import type { UserStore } from "@shared/stores/user";
import { storeToRefs } from "pinia";
import type { IUserInfo } from "./interfaces/useUserInfo";

export default function useUserInfo(store: UserStore): IUserInfo {
  const { getUser } = storeToRefs(store);
  const { id: userID, name } = getUser.value;

  return {
    userID,
    name
  }
}