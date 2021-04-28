export class Artist{
  constructor(
    private id: string,
    private artist: string
  ){}

  public getID():string{
    return this.id
  }
  public getArtist(): string{
    return this.artist
  }
}