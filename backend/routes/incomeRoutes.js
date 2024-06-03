import express from 'express'
import {addIncome, getIncomes, deleteIncome} from '../controllers/incomeController.js'

const router = express.Router()

router.post('/income', addIncome)

router.get('/income', getIncomes)

router.delete('/income/:id', deleteIncome)







export default router;