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
    produtos: [
      {
        id: 1,
        name: 'Voyager',
        price: 150.0,
        imgURL: 'https://picsum.photos/200/200',
        quantidade: 1,
      },
      {
        id: 2,
        name: 'Discovery',
        price: 100.0,
        imgURL: 'https://picsum.photos/200/200',
        quantidade: 1,
      },
      {
        id: 3,
        name: 'Ola mundo',
        price: 200.0,
        imgURL: 'https://picsum.photos/200/200',
        quantidade: 1,
      },
    ],

    carrinho: [],
  };

  addToCart(obj) {
    const carrinhoCopia = this.state.carrinho;
    this.setState({
      carrinho: [...carrinhoCopia, obj],
    });
    console.log(this.state.carrinho);
  }

  render() {
    return (
      <Container>
        <Filter />

        <Home
          executar={this.addToCart.bind(this)}
          produtos={this.state.produtos}
        />

        <Carrinho />

        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
