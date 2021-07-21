import React from 'react';
import styled, {createGlobalStyle} from 'styled-components'
import Carrinho from './components/Carrinho/Carrinho';
import Filter from './components/Filter/Filter';

const GlobalStyle  = createGlobalStyle`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

`

const Container = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`

class App extends React.Component {
  

  render() {
    return (
      <Container>

          <Filter/> 

          <Carrinho
             
          />

          <div>
            <h1>Thiago</h1>
          </div>

            <GlobalStyle/>
          </Container>
    );
  }
}

export default App;
