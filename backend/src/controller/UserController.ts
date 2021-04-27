import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { UserDataBase } from '../data/UserDataBase'
import { HashGenerator } from '../services/HashGenerator'
import { IdGenerator } from '../services/idGenerator'


const userBusiness = new UserBusiness(new IdGenerator(), new HashGenerator(), new UserDataBase())

export class UserController {
  public async signup(req: Request, res: Response) {
    try {
      const { name, email, nickname, password } = req.body
      const result = await userBusiness.singup(
        name,
        email,
        nickname,
        password
      )
      console.log(result)

      res.status(200).send(result)
    } catch (error) {
      const { statusCode, message } = error
      res.status(statusCode || 400).send({ message })
    }
  }
}

export default new UserController()