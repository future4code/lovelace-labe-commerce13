import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Home from './components/Home/Home';
import Carrinho from './components/Carrinho/Carrinho';
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
    const carrinhoCopia = this.state.carrinho;
    this.setState({
      carrinho: [...carrinhoCopia, obj],
    });
  }

  addQuantidade = (idObj) => {
    const carrinhoCopia = [...this.state.carrinho];
    const newCart = carrinhoCopia
      .map((produtoCarrinho) => {
        const { id } = produtoCarrinho;
        if (id === idObj) {
          const obj = {
            ...produtoCarrinho,
            quantidade: produtoCarrinho.quantidade + 1,
          };
          return obj;
        } else return produtoCarrinho;
      })
      .filter((item) => item.quantidade > 1);
    this.setState({ carrinho: newCart });
  };

  render() {
    console.log(this.state.carrinho);
    return (
      <Container>
        <Filter />

        <Home
          executar={this.addToCart.bind(this)}
          executar2={this.addQuantidade.bind(this)}
          produtos={this.state.produtos}
          carrinho={this.state.carrinho}
        />

        <Carrinho />

        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
