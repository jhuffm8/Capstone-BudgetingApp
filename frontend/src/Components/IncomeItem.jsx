
import styled from "styled-components"
import { calender, comment, dollar, trash } from "../utilities/Icons";
import { Button } from "./Button";
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
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
            </div>
            <div className="content">
                <h5>{title}</h5>
                    <div className="inner-content">
                        <div className="text">
                            <p>{dollar} {amount}</p>
                            <p>{calender} {date}</p>
                            <p>
                                {comment}
                                {description}
                            </p>
                        </div>
                        <div className="btn-con">
                            <Button 
                              icon={trash}
                              bPad={'1rem'}
                              bRad={'50%'}
                              bg={'var(--primary-color'}
                              color={'#fff'}
                              iColor={'#fff'}
                              hColor={'var(--color-green)'}
                            />
                        </div>
                    </div>
            </div>
        </IncomeItemStyled>
    )
}

const IncomeItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    width: 100%;
    align-items: center;
    gap: 1rem;
    color: #222260;
    flex: 1;
    .icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2rem;
        }
    }

    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }
        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }
    }

`;
