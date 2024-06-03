import Income from "../models/IncomeModel.js"

const addIncome = async (req, res) => {
    const {title, amount, category, description, date} = req.body;

    const income = Income({
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
        await income.save()
        res.status(200).json({message: 'Income Added'})
    } catch (error) {
        
    }

    console.log(income)
}





export {addIncome}