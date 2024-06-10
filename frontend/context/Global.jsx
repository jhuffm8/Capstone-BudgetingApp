import { createContext, useContext, useState } from "react";
import axios from 'axios'
const BASE_URL = `http://localhost:8080/api/`;

const GlobalContext = createContext({})




export const GlobalProvider = ({children}) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

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


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome

        }}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobal = () => useContext(GlobalContext)