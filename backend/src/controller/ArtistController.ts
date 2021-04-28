import { Request, Response } from 'express'
import { ArtistBusiness } from '../business/ArtistBusiness'
import { ArtistDataBase } from '../data/ArtistDataBase'
import { IdGenerator } from '../services/idGenerator'
import { TokenGenerator } from '../services/tokenGenerator'



const artistBusiness = new ArtistBusiness(new IdGenerator(), new ArtistDataBase(), new TokenGenerator())

export class ArtistController {
  public async createArtist(req: Request, res: Response) {
    try {
      const { artist } = req.body
      const token: string = req.headers.authorization!
      const result = await artistBusiness.created(artist, token)
      res.status(200).send(`Artista Cadastrado`)
    } catch (error) {
      const { statusCode, message } = error
      res.status(statusCode || 400).send({ message })
    }
  }
}
export default new ArtistController()