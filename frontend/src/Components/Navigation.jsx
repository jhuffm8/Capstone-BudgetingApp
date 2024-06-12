import styled from "styled-components"
import avatar from '../img/avatar.png'
import { menuItems } from "../utilities/menuItems"
import { signout } from "../utilities/Icons"

export function Navigation({select, setSelect}) {
   

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
                    key={item.id} onClick={() => setSelect(item.id)}
                    className={select === item.id ? 'active': ''}>
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li onClick={() => setSelect()}>
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
    background: rgba(102, 78, 236, 0.09);
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
            box-shadow: var(--box-shadow)
        }
        h2{
            color:var(--primary-color2);
        }
        p{
            color: var( --primary-color3);
        }
    }
    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            cursor: pointer;
            margin: .6rem 0;
            font-weight: 500;
            transition: all .3s ease-in-out;
            color: var(--primary-color2);
        }
        i{
            color:var(--primary-color2);
            font-size: 1.4rem;
            transition: all .3s ease-in-out;
        }

    }
    .active{
        color: rgba(34,34,90,1);
        i{
            color: rgba(34,34,90,1);
        }
        &::before{
            content: '';
            position: absolute;
            width: 4px;
            height: 100%;
            border: #0d0d3a;
            border-radius: 0 10px 10px 0;

        }
    }
    .bottom-nav{
        li{
            cursor: pointer;
        }
    }
`;