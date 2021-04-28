import express from 'express'
import artistController  from '../controller/ArtistController'


export const artistData = express.Router()

artistData.post('/', artistController.createArtist)
