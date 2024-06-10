import styled from "styled-components";
import { InnerLayout } from "../styles/MainStyles";
import { useGlobal } from "../../context/Global";
import { useEffect } from "react";
import { ExpenseForm } from "./ExpenseForm";
import { Item } from "./Items";
export function Expenses(){
    const {addExpense, expenses, getExpenses, deleteExpense, totalExpense} = useGlobal()
    useEffect(() => {
        getExpenses()
    }, [])

    return(
        <ExpensesStyled>
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className="totalIncome">Total Expense:<span>${totalExpense()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="incomes"></div>
                        {expenses.map((expense) => {
                             const {_id, title, amount, date, category, description} = expense
                             return <Item 
                                        key={_id}
                                        id={_id}
                                        title={title}
                                        description={description}
                                        amount={amount}  date={date}
                                        category={category}
                                        indicatorColor="red"
                                        deleteItem={deleteExpense}
                             
                             
                                    />
                        })}
                </div>
            </InnerLayout>
        </ExpensesStyled>
    )
};

const ExpensesStyled = styled.div`
    display: flex;
    overflow: auto;
    .totalIncome{
        display: flex;
        justify-content: center;
    }
    .income-content{
        gap: 2rem;
    }
`;