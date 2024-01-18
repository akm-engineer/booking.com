import express from 'express'
import { registerUser } from '../controllers/user'
import { userValidator, validate } from '../middlewares/validator'

const userRouter = express.Router()

userRouter.post("/register", userValidator, validate, registerUser)

export default userRouter