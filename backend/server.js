import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import db from './db/config.js'
import incomeRoutes from './routes/incomeRoutes.js'
import expenseRoutes from './routes/expenseRoutes.js'

const app = express()
const PORT = process.env.PORT


app.use(cors())
app.use(express.json())
app.use('/api', incomeRoutes)
app.use('/api', expenseRoutes)




app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
    db()
})