import React from 'react';
import styled, {createGlobalStyle} from 'styled-components'

import Home from './components/Home/Home';
import Filter from './components/Filter/Filter';
import Carrinhos from './components/Carrinho/Carrinhos';

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

  state = {
    produtos: [
      {
        id: 1,
        imagem: 'https://picsum.photos/200/200',
        nome: 'Produto 2',
        preco: 120,
        quantidade: 1
      },
      {
        id: 2,
        imagem: 'https://picsum.photos/202/202',
        nome: 'Produto 4',
        preco: 200,
        quantidade: 2
      }
    ],
    carrinho: []
  }

  render() {
    
    return (
      <Container>

          <Filter 

          /> 

          <Home 
                        
          />

          {this.state.carrinho.length !== 0 && <Carrinhos 
              carrinho = {this.state.carrinho}
          />}
                    
        <GlobalStyle/>
      </Container>
    );
  }
}

export default App;
