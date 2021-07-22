import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Home from './components/Home/Home';
import Carrinhos from './components/Carrinho/Carrinhos';
import Filter from './components/Filter/Filter';

const GlobalStyle = createGlobalStyle`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const Container = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

class App extends React.Component {
  
  state = {
    carrinho: [],
  };

  addToCart(obj) {
    const carrinhoCopia = [...this.state.carrinho];
    this.setState({
      carrinho: [...carrinhoCopia, obj]
    });    
  }

  removerItem = (itemID) => {
    const newCart = this.state.carrinho.map(( produto ) => {
        const { id, quantidade } = produto
        if (itemID === id){
            return {
              ...produto,
              quantidade: quantidade -1
            }
        }
        return produto
    }).filter(({ quantidade }) => quantidade >= 1)
    this.setState({ carrinho: newCart })
  }

  render() {
    return (
      <Container>
        <Filter />

        <Home
          executar={this.addToCart.bind(this)}
          produtos={this.state.produtos}
        />

        {this.state.carrinho.length !== 0 && <Carrinhos 
          carrinho = {this.state.carrinho}
          executar = {this.removerItem.bind(this)}
        />}

        <GlobalStyle />
      </Container>
    );
  }
}

export default App;