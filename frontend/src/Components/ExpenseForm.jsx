import { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useGlobal } from "../context/Global";
import styled from "styled-components";
import { Button } from "./Button";
import { plus } from "../utilities/Icons";


export function ExpenseForm(){
    const {addExpense} = useGlobal()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })
    const {title, amount, date, category, description} = inputState;
    const handleInput = name => (e) => {
        setInputState({...inputState, [name]: e.target.value})

    };

    const handleSubmit = (e) => {
        e.preventDefault()
        addExpense(inputState)
        setInputState({  title: '',
        amount: '',
        date: '',
        category: '',
        description: '',})
    }



    return (
       <ExpenseFormStyled onSubmit={handleSubmit}>
        <div className="input-control">
            <input 
            type="text" 
            value={title}
            name={'title'}
            placeholder="Expense Title"
            onChange={handleInput('title')}
            
            />
        </div>
        <div className="input-control">
            <input 
            type="text" 
            value={amount}
            name={'amount'}
            placeholder="Expense Amount"
            onChange={handleInput('amount')}
            />
        </div>
        <div className="input-control">
            <DatePicker  
                id='date'  
                placeholderText='Enter a Date'
                selected={date}
                 onChange={(date) => {
                setInputState({...inputState, date: date})
            }} ></DatePicker>
        </div>
        <div className="selects input-control">
            <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                <option value="" disabled>Select Option</option>
                <option value="Education">Education</option>
                <option value="Groceries">Groceries</option>
                <option value="Health">Health</option>
                <option value="Subscriptions">Subscriptions</option>
                <option value="Clothing">Clothing</option>
                <option value="Travel">Travel</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div className="input-control">
            <textarea name="description" value={description} id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
        </div>
        <div className="submit-btn">
            <Button 
            name={'Add Expense'}
            icon={plus}
            bPad={'.8rem 1.6rem'}
            bRad={'30px'}
            bg={'var(--color-accent'}
            color={'#fff'}

            />
        </div>
        <br />
       </ExpenseFormStyled>
    )
}

const ExpenseFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1.5rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: var(--box-shadow);
        color:var(--primary-color2);
        &::placeholder{
            color: var(--primary-color2);
        }

    }
    .input-control{
        input{
            width: 100%;
        }
    }
    .selects{
        display: flex;
        justify-content: flex-end;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;