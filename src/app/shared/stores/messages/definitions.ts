import type { IMessageState } from "@/server/types/messages";

interface IType { type: string } 
export interface IMessagesStoreState extends IMessageState, IType {}