import styled from "styled-components";
import { InnerLayout } from "../styles/MainStyles";
import { Form } from "./Form";
import { useGlobal } from "../../context/Global";
import { useEffect } from "react";
import { Item } from "./Items";
export function Income(){
    const {addIncome, incomes, getIncomes, deleteIncome, totalIncome} = useGlobal()
    useEffect(() => {
        getIncomes()
    }, [])

    return(
        <IncomeStyled>
            <InnerLayout>
                <h1>Income</h1>
                <h2 className="totalIncome">Total Income:<span>${totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes"></div>
                        {incomes.map((income) => {
                             const {_id, title, amount, date, category, description, type} = income
                             return <Item 
                                        key={_id}
                                        id={_id}
                                        title={title}
                                        description={description}
                                        amount={amount}  date={date}
                                        category={category}
                                        type={type}
                                        indicatorColor="var(--color-green)"
                                        deleteItem={deleteIncome}
                             
                             
                                    />
                        })}
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
};

const IncomeStyled = styled.div`
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