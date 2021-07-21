import React from 'react';
import styled, {createGlobalStyle} from 'styled-components'
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

function App() {
  return (
    
    <Container>
        
       <Filter/> 

        <div>
          <h1>Eunice</h1>
        </div>

        <div>
          <h1>Thiago</h1>
        </div>

        <GlobalStyle/>
    </Container>
    
  );
}

export default App;
