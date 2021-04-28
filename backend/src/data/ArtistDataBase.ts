import { Artist } from "../model/Artist";
import BaseDateBase from "./BaseDataBase";

export class ArtistDataBase extends BaseDateBase {
  protected tableName: string = "soundfyArtist"

  private toModel(dbModel?: any): Artist | undefined {
    return (
      dbModel && new Artist(
        dbModel.id,
        dbModel.artist
      )
    )
  }

  public async createArtist(artist: Artist): Promise<void> {
    try {
      await BaseDateBase.connection.raw(`
        INSERT INTO ${this.tableName}(id, artist)
        VALUES(
          '${artist.getID()}',
          '${artist.getArtist()}'
        )
      `)
    } catch (error) {
      throw new Error("Não consegui cadastrar o Artista");

    }
  }
}