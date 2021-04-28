import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { UserDataBase } from '../data/UserDataBase'
import { HashGenerator } from '../services/HashGenerator'
import { IdGenerator } from '../services/idGenerator'
import { TokenGenerator } from '../services/tokenGenerator'


const userBusiness = new UserBusiness(new IdGenerator(), new TokenGenerator(), new HashGenerator(), new UserDataBase())

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
      res.status(200).send(result)
    } catch (error) {
      const { statusCode, message } = error
      res.status(statusCode || 400).send({ message })
    }
  }
  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body
      const result = await userBusiness.login(email, password)
      res.status(200).send(result)
    } catch (error) {
      res.status(400).send("Check the fields")
    }
  }
}

export default new UserController()