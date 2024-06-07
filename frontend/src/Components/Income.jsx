import styled from "styled-components";
import { InnerLayout } from "../styles/MainStyles";
import { Form } from "./Form";
import { useGlobal } from "../../context/Global";
import { useEffect } from "react";
export function Income(){
    const {addIncome, incomes, getIncomes} = useGlobal()
    useEffect(() => {
        getIncomes()
    }, [])

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
                             const {title, amount, date, category, description} = income
                             return 
                        })}
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
};

const IncomeStyled = styled.div`
    
`;