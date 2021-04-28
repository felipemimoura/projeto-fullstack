import * as jwt from 'jsonwebtoken'
import dotenv from "dotenv"

dotenv.config()

export class TokenGenerator {
  private static expiresIn: number = 1200;

  public generate = (input: AuthenticationData): string => {
    const newToken = jwt.sign({
      id: input.id
    },
      process.env.JWT_KEY as string,
      {
        expiresIn: TokenGenerator.expiresIn
      })

    return newToken
  }

}


export interface AuthenticationData {
  id: string
}
export default new TokenGenerator()