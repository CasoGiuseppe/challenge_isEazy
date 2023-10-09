import type { IMessageState } from "./type";

export const initMessagesState: IMessageState[] = [
  {
    id: 'SEND001',
    type: 'message',
    item: {
      text: 'custom sender message from here',
      date: new Date("2023-08-17T03:24:00")
    }
  },
  {
    id: 'REC001',
    type: 'message',
    item: {
      text: 'custom receive message from here',
      date: new Date("2023-01-01T05:00:00")
    }
  },
  {
    id: 'REC001',
    type: 'message',
    item: {
      text: 'custom receive message from here',
      date: new Date("2022-08-17T03:24:00")
    }
  },
  {
    id: 'SEND001',
    type: 'message',
    item: {
      text: 'custom sender message from here',
      date: new Date("2022-01-10T18:01:00")
    }
  },
]