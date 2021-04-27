import { Request, Response } from 'express'


export class UserController {
  public async signup(req: Request, res: Response) {
    try {
      const { name, email, nickname, password } = req.body
    } catch (error) {
      const { statusCode, message } = error
      res.status(statusCode || 400).send({ message })
    }
  }
}

export default new UserController()