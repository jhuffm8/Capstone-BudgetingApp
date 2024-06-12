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
                                <h2>Total Net</h2>
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
    
`