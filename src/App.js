import React from 'react';
import styled, {createGlobalStyle} from 'styled-components'
import Home from './components/Home/Home';

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

function App() {
  return (
    
    <Container>
        
        <div>
          <h1>Luan</h1>
          </div>

        <Home />

        <div>
          <h1>Thiago</h1>
        </div>

        <GlobalStyle/>
    </Container>
    
  );
}

export default App;
