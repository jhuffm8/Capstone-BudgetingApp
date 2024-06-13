import {Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement} from 'chart.js'
import {Line} from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobal } from '../context/Global';
import { DateFormat } from "../utilities/DateFormat";
ChartJs.register(
    CategoryScale, // x-point
    LinearScale, // y-point
    PointElement,// point on graph 
    LineElement,
    Title, // for text on top of chart
    Tooltip, // shows exact data of wac point on chart
    Legend, // to create arc within lines

)
export function Chart() {
    const {incomes, expenses} = useGlobal()
    const data = {
        labels: incomes.map((income) => {
            const {date} = income
            return DateFormat(date)
        })
       
        ,
        datasets: [
          { 
            label: 'Income',
            data: [
                ...incomes.map((income) => {
                    const {amount} = income
                    return amount;
                })
            ],
            backgroundColor: 'green',
            tension: .2,
            pointStyle: 'rectRot',
            radius: 5

          },
          { 
            label: 'Expenses',
            data: [
                ...expenses.map((expense) => {
                    const {amount} = expense
                    return amount;
                })
            ],
            backgroundColor: 'red',
            tension: .2,

          }

        ]
    };
    return(
   <ChartStyled>
        <Line data={data}/>
   </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: #FCF6F9 ;
    border: 2px solid #FFF;
    box-shadow: var( --box-shadow);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`