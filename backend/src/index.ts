import express from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { userData } from './router/UserRouter';
import dotenv from "dotenv";
import { artistData } from './router/ArtistRouter';

const app = express()
app.use(express.json())
app.use(cors())
app.use("/user", userData)
app.use("/artist",artistData)

dotenv.config()

const server = app.listen(process.env.PORT || 3003, () =>{
  if(server){
    const address =server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`)
  }else{
    console.log(`Failure upon starting server.`)
  }
})

export default app