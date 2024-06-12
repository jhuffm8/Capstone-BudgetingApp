import styled from "styled-components"
import { useGlobal } from "../context/Global"
import { DateFormat } from "../utilities/DateFormat"
import { InnerLayout } from "../styles/MainStyles"
export function History(){
    const {transactionHistory} = useGlobal()

    const [...history] = transactionHistory()
    return(
        <HistoryStyled>
            <InnerLayout>
            <h2>Recent History</h2>
            {history.map((item) => {
                const {_id, title, amount, type, date} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'green'
                        }}>
                            {title}
                        </p>
                        <p style={{
                            color: type === 'expense' ? 'red' : 'green'
                        }}>
                            {
                                type === 'expense' ? `-${amount}` : `+${amount}`

                            }
                        </p>

                    </div>
                )
            })}
            </InnerLayout>
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2{
        display: flex;
        justify-content: center;
        padding: 2rem;
    }
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem;
    }

`