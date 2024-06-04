import styled from "styled-components"
import avatar from '../img/avatar.png'
import { menuItems } from "../utilities/menuItems"
import { signout } from "../utilities/Icons"

export function Navigation() {
    return(
        <NavStyle>
            <div className="user-container">
                <img  src={avatar} alt="" />
                <div className="className">
                    <h2>Jordan</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                    key={item.id}>
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>


        </NavStyle>
    )
}

const NavStyle = styled.nav`
    padding: 2rem 1.5rem;
    width: 375px;
    height: 100%;
    background: rgba(245, 62, 153, .08);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-container{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0px 1px 17px rgba(0,0,0,0.06)
        }
        h2{
            color: rgba(34,34,90,1);
        }
        p{
            color: rgba(34,34,90,0.6);
        }
    }
    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
        }

    }
`;