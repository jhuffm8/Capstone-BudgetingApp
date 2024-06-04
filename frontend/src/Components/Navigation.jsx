import styled from "styled-components"
import avatar from '../img/avatar.png'

export function Navigation() {
    return(
        <NavStyle>
            <div className="user-container">
                <img src={avatar} alt="" />
                <div className="className">
                    <h2>Jordan</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">

            </ul>


        </NavStyle>
    )
}

const NavStyle = styled.nav`
`