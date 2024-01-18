import express from 'express'
import { loginUser } from '../controllers/user'
import { loginValidator, userValidator, validate } from '../middlewares/validator'

const authRouter = express.Router()

authRouter.post("/login", loginValidator, validate, loginUser)

export default authRouter