import bg from './img/bg.jpg'
import styled from 'styled-components';
import { Main } from './styles/MainStyles';
import { Navigation } from './Components/Navigation';
import { useState } from "react"
import { DashBoard } from './Components/Dashboard';
import { Expenses } from './Components/Expenses';
import { Income } from './Components/Income';
import { History } from './Components/TransactionHistory';
import { Login } from './Components/Login';
import {Route, Routes} from 'react-router-dom'

function App() {
  const [select, setSelect ] = useState(1)
  // const global  =  GlobalContext;
  // console.log(global._currentValue)

  const displayData = () => {
    switch(select){
      case 1:
        return <DashBoard />;
      case 2:
        return <History />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Login/>
      
    }
  }

  return ( 
  <AppStyled bg={bg} className="App">
    <Main>
      <Navigation select={select} setSelect={setSelect} />
      <main>
        {displayData()}
      </main>
    </Main>
  </AppStyled>
  )
}

const AppStyled = styled.div`
height: 100vh;
width: 100vw;
background-image: url(${props => props.bg});
position: relative;
main{
  flex: 1;
  background:  rgba(102, 78, 236, 0.09);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  overflow-x: hidden;
  &::-webkit-scrollbar{
      width: 0;
    }
}
`;

export default App
