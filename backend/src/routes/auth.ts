import express, { Request, Response } from 'express'
import { loginUser } from '../controllers/user'
import { loginValidator, validate } from '../middlewares/validator'
import { verifyToken } from '../middlewares/auth'

const authRouter = express.Router()

authRouter.post("/login", loginValidator, validate, loginUser)
authRouter.get("/validate-token", verifyToken, ((req: Request, res: Response) => {
    res.status(200).send({ userId: req.userId })
}))

export default authRouter