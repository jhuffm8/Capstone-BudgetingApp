import styled from "styled-components"
import { InnerLayout, Main } from "../styles/MainStyles"

export function Login(){
    return (
        <LoginStyled>
            <Main>
                <div className="login-con">
                    <h2>Login</h2>
                    <form action="" className="login">
                        <label><h5>Email</h5>
                        <input type="email" />
                        </label>
                        <br />
                        <label>
                            <h5>Password</h5>
                            <input type="password" />
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
    background: #ffffff5a;
    border-radius: 20px;
    padding: 15rem;
    h2{
        text-align: center;
    }
   }
`