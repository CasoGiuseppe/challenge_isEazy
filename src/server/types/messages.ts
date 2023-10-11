import { ListType } from '@shared/types/definitions';
export interface IMessageState {
  item: ITextType | IAttachType | {};
  id?: UniqueId ;
  user: string ;
  type?: ListType ;
  picture: string 
}

export interface ITextType {
  text: string,
  date: Date
}

export interface IAttachType {
  version: string,
  title: string,
  info: string,
  url: string,
  date: Date
}