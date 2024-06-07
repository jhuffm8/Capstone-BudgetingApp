
import styled from "styled-components"
import { calender, comment, dollar, trash } from "../utilities/Icons";
export function IncomeItem({
    id,
    title,
    amount,
    date, 
    category, 
    description,
    deleteItem,
    indicatorColor,
    type
    
}){
    return(
        <IncomeItemStyled>
            <div className="icon">
            </div>
            <div className="content">
                <h5>{title}</h5>
                    <div className="inner-content">
                        <div className="text">
                            <p>{dollar}</p>
                            <p>{calender} {date}</p>
                            <p>
                                {comment}
                                {description}
                            </p>
                        </div>
                    </div>
            </div>
        </IncomeItemStyled>
    )
}

const IncomeItemStyled = styled.div`

`;
