import type { IMessageState } from "./type";

export const initMessagesState: IMessageState[] = [
  {
    id: 'SEND001',
    type: 'message',
    item: {
      text: 'custom sender message from here',
      date: new Date(Date.now())
    }
  },
  {
    id: 'REC001',
    type: 'message',
    item: {
      text: 'custom receive message from here',
      date: new Date(Date.now())
    }
  },
  {
    id: 'REC001',
    type: 'message',
    item: {
      text: 'custom receive message from here',
      date: new Date(Date.now())
    }
  },
  {
    id: 'SEND001',
    type: 'message',
    item: {
      text: 'custom sender message from here',
      date: new Date(Date.now())
    }
  },
]