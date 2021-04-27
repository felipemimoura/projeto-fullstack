import { UserDataBase } from "../data/UserDataBase";
import { User } from "../model/User";
import { HashGenerator } from "../services/HashGenerator";
import { IdGenerator } from "../services/idGenerator";


export class UserBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private hashGenerator: HashGenerator,
    private userDatabase: UserDataBase
  ) { }

  public async singup(
    name: string,
    email: string,
    nickname: string,
    password: string
  ) {
    try {
      if (!name || !email || !nickname || !password) {
        throw new Error("Missing Input")
      }
      if (email.indexOf("@") === -1) {
        throw new Error("Invalid Email")
      }

      if (password.length < 6) {
        throw new Error("'password' must contain at least 6 characters")
      }
      const id = this.idGenerator.generate()

      const cypherPass = await this.hashGenerator.hash(password)

      await this.userDatabase.createUser(
        new User(id, name, email, cypherPass, nickname)
      )
      return { message: "User Created" }

    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default new UserBusiness(
  new IdGenerator(),
  new HashGenerator(),
  new UserDataBase()
)