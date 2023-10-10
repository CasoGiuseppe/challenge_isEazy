import type { IUserState } from '@/server/types/users';

export class UserViewModel {
  private constructor(
    public readonly id: string,
    public readonly name?: string,
    public readonly surname?: string,
    public readonly picture?: string,
    public readonly email?: string
  ) {}

  static createUserViewModel(user: IUserState) {
    const { id, name, surname, picture, email } = user;
    return new UserViewModel(id, name, surname, picture, email);
  }

  get viewUser() {
    return {
      id: this.id,
      completeName: `${this.name} ${this.surname}`,
      picture: this.picture,
      email: this.email
    };
  }
}
