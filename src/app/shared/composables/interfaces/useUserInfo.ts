export interface IUserInfo {
  userID: string,
  name: string,
  saveUser(): Promise<void>
}