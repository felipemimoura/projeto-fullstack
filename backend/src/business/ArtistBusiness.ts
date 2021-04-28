import { ArtistDataBase } from "../data/ArtistDataBase";
import { Artist } from "../model/Artist";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";


export class ArtistBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private artistDatabase: ArtistDataBase,
    private tokenGenerator: TokenGenerator,
  ) { }

  public async created(
    artist: string,
    token: string
  ) {
    console.log(artist)
    try {
      if (!artist) {
        throw new Error("Artist name is required")
      }
      const tokenData = this.tokenGenerator.verify(token)
      if (!tokenData) {
        throw new Error("Unauthorized")
      }
      const id = this.idGenerator.generate()
      const newArtist = await this.artistDatabase.createArtist(
        new Artist(id, artist)
      )

      return { newArtist }

    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default new ArtistBusiness(
  new IdGenerator(),
  new ArtistDataBase(),
  new TokenGenerator()
)