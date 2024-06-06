import { useContext, useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useGlobal } from "../../context/Global";
import styled from "styled-components";


export function Form(){
    const {addIncome} = useGlobal()
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
        addIncome(inputState)
        console.log(inputState)
    }



    return (
       <FormStyled onSubmit={handleSubmit}>
        <div className="input-control">
            <input 
            type="text" 
            value={title}
            name={'title'}
            placeholder="Income Title"
            onChange={handleInput('title')}
            
            />
        </div>
        <div className="input-control">
            <input 
            type="text" 
            value={amount}
            name={'amount'}
            placeholder="Income Amount"
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
                <option value="salary">Salary</option>
                <option value="freelancing">Freelancing</option>
                <option value="investments">Investments</option>
                <option value="stocks">Stocks</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div className="input-control">
            <textarea name="description" value={description} id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
        </div>
        <div className="submit-btn">
            <button>Add Income</button>
        </div>
       </FormStyled>
    )
}

const FormStyled = styled.form`
    
`;