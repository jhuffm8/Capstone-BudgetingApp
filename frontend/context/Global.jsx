import { createContext, useState } from "react";
import axios from 'axios'
const BASE_URL = `http://localhost:8080/api/`;

export const GlobalContext = createContext(null)




export const GlobalProvider = ({children}) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);


    const addIncome = async (income) => {
        const res = await axios.post(`${BASE_URL}income`, income)
            .catch((err) => {
                setError(err.res.data.message)
            })
    }


    return (
        <GlobalContext.Provider value={'hello'}>
            {children}
        </GlobalContext.Provider>
    )



}