import { storeToRefs } from "pinia";
import type { MessageStore } from "@shared/stores/messages";
import type { IMessagesDetails } from "./interfaces/useMessagesDetails";

export default function useMessagesDetais(store: MessageStore): IMessagesDetails {
  const { getMessages } = storeToRefs(store);

  return {
    items: getMessages.value
  }
}