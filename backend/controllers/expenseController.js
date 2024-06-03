import Expense from "../models/ExpenseModel.js";

const addExpense = async (req, res) => {
    const {title, amount, category, description, date} = req.body;

    const expense = Expense({
        title,
        amount,
        category,
        description,
        date
    });
    try {
        
        if(!title || !category || !description || !date){
            return res.status(400).json({message: "All fields are required"})
        }
        
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: "Amount needs to be a positive number"})
        }
        await expense.save()
        res.status(200).json({message: 'Expense Added'})
    } catch (error) {
        res.status(500).json({message: error})
    }

    console.log(expense)
};

const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: error})
        
    }
};


const deleteExpense = async (req, res) => {
    const {id} = req.params;
    try {
        await Expense.findByIdAndDelete(id)
        res.status(200).json({message: "Expense Deleted"})
    } catch (error) {
        res.status(400).json({message: error})
        
    }

}


export {addExpense, getExpenses, deleteExpense}