import { createContext, useContext, useState } from "react";
import axios from 'axios'
const BASE_URL = `http://localhost:8080/api/`;

const GlobalContext = createContext({})




export const GlobalProvider = ({children}) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);
    
//income functions
    const addIncome = async (income) => {
         const res = await axios.post(`${BASE_URL}income`, income)
            .catch((err) => {
                setError(err.res.data.message)
            })
            getIncomes()
    }
    const getIncomes = async () => {
        const res = await axios.get(`${BASE_URL}income`)
        setIncomes(res.data)
    }

    const deleteIncome = async (id) => {
        const res = await axios.delete(`${BASE_URL}income/${id}`)
        getIncomes()
    }

    const totalIncome = () => {
        let total = 0;
        incomes.forEach(income => {
            total += income.amount
        })
        return total
    }

    //expense functions

    const addExpense = async (expense) => {
        const res = await axios.post(`${BASE_URL}expense`, expense)
           .catch((err) => {
               setError(err.res.data.message)
           })
           getExpenses()
   }
   const getExpenses = async () => {
       const res = await axios.get(`${BASE_URL}expense`)
       setExpenses(res.data)
   }

   const deleteExpense = async (id) => {
       const res = await axios.delete(`${BASE_URL}expense/${id}`)
       getExpenses()
   }

   const totalExpense = () => {
       let total = 0;
       expenses.forEach(expense => {
           total += expense.amount
       })
       return total
   }

   // total net and transaction history
   const totalNet = () => {
    return totalIncome() - totalExpense()
   }

   const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return history
   }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpense,
            totalNet,
            transactionHistory

        }}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobal = () => useContext(GlobalContext)