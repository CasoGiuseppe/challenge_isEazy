export interface IMessageState {
  id: UniqueId ;
  user: string ;
  item: ITextType;
  picture: string 
}

export interface ITextType {
  text: string,
  date: Date | string
}