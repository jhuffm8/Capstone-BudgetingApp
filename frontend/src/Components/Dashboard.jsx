import styled from "styled-components"
import { InnerLayout } from "../styles/MainStyles"
import { Chart } from "./Charts"
import { useGlobal } from "../context/Global"
import {dollar} from '../utilities/Icons'
import { useEffect } from "react"


export function DashBoard() {
    const {totalNet, getIncomes, getExpenses} = useGlobal()
    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])
    return(
       <DashBoardStyled>
            <InnerLayout>
                <h1>All Transaction</h1>
                <div className="stats-con">
                <div className="amount-con">
                            <div className="total-net">
                                <h2>Total Net: </h2>
                                <p>
                                    {dollar} {totalNet()}
                                </p>

                            </div>
                    <div className="chart-con">
                        <Chart />
                       
                        </div>
                    </div>
                </div>
            </InnerLayout>
       </DashBoardStyled>
    )
};

const DashBoardStyled = styled.div`
    .total-net{
        display: flex;
        justify-content: center;
        padding-bottom: 1rem;

        h2{
            font-weight: 7rem;
            padding-right: 1.05rem;
        }
        p{
            color: green;
            font-size: 1.75rem;
            padding-top: .3rem;
        }
    }
`