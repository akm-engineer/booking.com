import express from "express"
import cors from 'cors'
import "dotenv/config"
import  mongoose from "mongoose"

const app=express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.get("/api/test",(req,res)=>{
    res.json({message:"Hello from testing"})
})

mongoose.connect(process.env.MONGO_URL as string)

app.listen(7000,()=>{
    console.log(`Server is running on port: 7000`)
})