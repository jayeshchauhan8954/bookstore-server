import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from 'cors'

import dbConnection from "./configs/db.js"

const app = express()
// routes
import bookRoute from './src/route/book.route.js'
import userRoute from './src/route/user.route.js'
app.use(cors())
app.use(express.json())
dotenv.config()

const PORT = process.env.PORT || 4000

const URI = process.env.MongoDBURI
await dbConnection()
app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})