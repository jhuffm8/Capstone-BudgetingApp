import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import db from './db/config.js'

const app = express()
const PORT = process.env.PORT


app.use(cors())
app.use(express.json())





app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
    db()
})