import { IdGenerator } from "../services/idGenerator";


export class UserBusiness {
  constructor(
    private idGenerator: IdGenerator
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

      if(password.length < 6){
        throw new Error ("'password' must contain at least 6 characters")
      }
      const id = this.idGenerator.generate()
    } catch (error) {

    }
  }


}