import express from 'express'
import userController from '../controller/UserController'


export const userData = express.Router()

userData.post('/signup', userController.signup)
userData.post('/login', userController.login)