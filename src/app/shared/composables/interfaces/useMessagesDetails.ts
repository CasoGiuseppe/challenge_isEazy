import type { IMessageState } from "@/server/types/messages";

export interface IMessagesDetails {
  items: any,
  getMessages(): Promise<IMessageState | undefined>
}