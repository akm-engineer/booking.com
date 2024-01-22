import express from "express"
import cors from 'cors'
import "dotenv/config"
import mongoose from "mongoose"
import userRouter from "./routes/user"
import authRouter from "./routes/auth"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))
app.use(express.urlencoded({ extended: true }))

app.use("/api/users", userRouter)
app.use("/api/auth", authRouter)

mongoose.connect(process.env.MONGO_URL as string)

app.listen(7000, () => {
    console.log(`Server is running on port: 7000`)
})