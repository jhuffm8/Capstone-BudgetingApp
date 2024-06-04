import bg from './img/bg.jpg'
import styled from 'styled-components';
import { Main } from './styles/MainStyles';

function App() {

 

  return (
  <AppStyled bg={bg} className="App">

    <Main>
      <h1>Hello</h1>
    </Main>


  </AppStyled>
  )
}

const AppStyled = styled.div`
height: 100vh;
background-image: url(${props => props.bg});
position: relative;
width:100vw;
`;

export default App
