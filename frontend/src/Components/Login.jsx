import styled from "styled-components"
import { Main } from "../styles/MainStyles"
import { useState } from "react"
import { Button } from "./Button"
import { doSignInUser, doSignInWithGoogle } from "../firebase/auth"
import { useAuth } from "../context/authContext"
export function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)

    return (
        <LoginStyled>
            <div className="login-con">
                <h1>Login</h1>
                <div className="login">
                <input 
                     type="email" 
                     name={'email'}
                    placeholder="Email"
                />
                </div>
                <br/>
                <div className="email">
                <input 
                     type="password" 
                     name={'password'}
                    placeholder="Password"
                />
                </div>
                <br />
                <div className="submit-btn">
                    <Button 
                    name={'Enter'}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}

                        />
                </div>
        
            </div>
        </LoginStyled>
    )
}

const LoginStyled = styled.form`
    display: flex;
    justify-content: center;
    padding-top: 20rem;
    .login-con{
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border: none;
    }
    h1{
        text-align: center;
        font-size: 5rem;
    }
    input, textarea{
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
    .submit-btn{
        display: flex;
        justify-content: center;
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`