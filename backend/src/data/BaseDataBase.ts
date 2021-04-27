import knex from "knex"
import dotenv from "dotenv";

dotenv.config()
console.log(process.env.DB_HOST)
export default class BaseDateBase{
  protected static connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      multipleStatements: true
    }
  })
}