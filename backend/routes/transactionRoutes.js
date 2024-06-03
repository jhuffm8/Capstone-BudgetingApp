import express from 'express'
import {addIncome, getIncomes, deleteIncome} from '../controllers/incomeController.js'

const router = express.Router()

router.post('/add-income', addIncome)

router.get('/get-income', getIncomes)

router.delete('/delete-income/:id', deleteIncome)







export default router;