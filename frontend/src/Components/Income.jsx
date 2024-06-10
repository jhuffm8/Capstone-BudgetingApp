import styled from "styled-components";
import { InnerLayout } from "../styles/MainStyles";
import { Form } from "./Form";
import { useGlobal } from "../../context/Global";
import { useEffect } from "react";
import { IncomeItem } from "./IncomeItem";
export function Income(){
    const {addIncome, incomes, getIncomes, deleteIncome} = useGlobal()
    useEffect(() => {
        getIncomes()
    }, [incomes])

    return(
        <IncomeStyled>
            <InnerLayout>
                <h1>Income</h1>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes"></div>
                        {incomes.map((income) => {
                             const {_id, title, amount, date, category, description} = income
                             return <IncomeItem 
                                        key={_id}
                                        id={_id}
                                        title={title}
                                        description={description}
                                        amount={amount}  date={date}
                                        category={category}
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
    .income-content{
        gap: 2rem;
    }
`;