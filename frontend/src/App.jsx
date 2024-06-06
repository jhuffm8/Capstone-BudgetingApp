import bg from './img/bg.jpg'
import styled from 'styled-components';
import { Main } from './styles/MainStyles';
import { Navigation } from './Components/Navigation';
import { useState } from "react"
import { DashBoard } from './Components/Dashboard';
import { Expenses } from './Components/Expenses';
import { Income } from './Components/Income';
import { GlobalContext } from '../context/Global';

function App() {
  const [select, setSelect ] = useState(1)
  const global  =  GlobalContext;
  console.log(global._currentValue)

  const displayData = () => {
    switch(select){
      case 1:
        return <DashBoard />;
      case 2:
        return <DashBoard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;

      default:
        return <DashBoard />
      
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
background-image: url(${props => props.bg});
position: relative;
width:100vw;
main{
  flex: 1;
  background:  rgba(102, 78, 236, 0.09);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  overflow: auto;
  overflow-x: hidden;
}
`;

export default App
