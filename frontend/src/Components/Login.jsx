import styled from "styled-components"
import { InnerLayout, Main } from "../styles/MainStyles"

export function Login(){
    return (
        <LoginStyled>
            <Main>
                <div className="login-con">
                    <h1>Login</h1>
                    <form action="" className="login">
                        <label><h5>Email</h5>
                        <input type="email" />
                        </label>
                        <br />
                        <label>
                            <h5>Password</h5>
                            <input type="password"/>
                        </label>
                    </form>
                </div>
            </Main>
        </LoginStyled>
    )
}

const LoginStyled = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
   .login-con{
    border: 10px;
    background: #ffffff2d;
    border-radius: 20px;
    padding: 20rem;
    h1{
        text-align: center;
    }
    input{
        border: none;
        border-radius: 5px;
        width: 100%;
    }
   }
`