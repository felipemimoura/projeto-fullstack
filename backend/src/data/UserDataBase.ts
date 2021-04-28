import { raw } from "express";
import { User } from "../model/User";
import BaseDateBase from "./BaseDataBase";


export class UserDataBase extends BaseDateBase {
  protected tableName: string = "soundfyUser"

  private toModel(dbModel?: any): User | undefined {
    return (
      dbModel && new User(
        dbModel.id,
        dbModel.name,
        dbModel.email,
        dbModel.password,
        dbModel.nickname
      )
    )
  }

  public async createUser(user: User): Promise<void> {
    try {
      await BaseDateBase.connection.raw(`
        INSERT INTO ${this.tableName}(id, name, email, password, nickname)
        VALUES(
          '${user.getID()}',
          '${user.getName()}',
          '${user.getEmail()}',
          '${user.getPassword()}',
          '${user.getNickname()}'
        )
      `)
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    try {
      const result = await BaseDateBase.connection.raw(`
        SELECT * FROM ${this.tableName} WHERE email = '${email}'
      `)
      return this.toModel(result[0][0])
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}