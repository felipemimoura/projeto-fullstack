export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private nickname: string
  ) { }

  public getID(): string{
    return this.id
  }
  public getName(): string{
    return this.name
  }
  public getEmail(): string{
    return this.email
  }
  public getPassword(): string{
    return this.password
  }

  public getNickname(): string{
    return this.nickname
  }
}