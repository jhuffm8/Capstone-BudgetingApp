import bg from './img/bg.jpg'
import './App.css'

function App() {

 

  return (
  <AppStyled bg={bg} className="App">


  </AppStyled>
  )
}

const AppStyled = styled.dv`
height: 100vh;
background-image: url(${props => props.bg});
position: relative;
`;

export default App
