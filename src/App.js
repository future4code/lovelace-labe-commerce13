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
  produtosArray = [
    {
      id: 1,
      name: 'Voyager',
      price: 50.0,
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
  ];

  state = {
    valorMin: '',
    valorMax: '',
    procurarNome: '',
    ordena: '',
    produtos: [...this.produtosArray],
    carrinho: [],
  };

  onChangeInput = (event) => {
    this.setState({ procurarNome: event.target.value });
  };

  onChangeInputValorMin = (event) => {
    this.setState({ valorMin: event.target.value });
  };

  onChangeInputValorMax = (event) => {
    this.setState({ valorMax: event.target.value });
  };

  onChangeInputOrdena = ({ target }) => this.setState({ ordena: target.value });

  addToCart(obj) {
    const carrinhoCopia = [...this.state.carrinho];
    this.setState({
      carrinho: [...carrinhoCopia, obj],
    });
  }

  removerItem = (itemID) => {
    const newCart = this.state.carrinho
      .map((produto) => {
        const { id, quantidade } = produto;
        if (itemID === id) {
          return {
            ...produto,
            quantidade: quantidade - 1,
          };
        }
        return produto;
      })
      .filter(({ quantidade }) => quantidade >= 1);
    this.setState({ carrinho: newCart });
  };

  addQuantidade = (idObj) => {
    const carrinhoCopia = [...this.state.carrinho];
    const newCart = carrinhoCopia.map((produtoCarrinho) => {
      const { id } = produtoCarrinho;
      if (id === idObj) {
        const obj = {
          ...produtoCarrinho,
          quantidade: produtoCarrinho.quantidade + 1,
        };
        return obj;
      } else return produtoCarrinho;
    });
    this.setState({ carrinho: newCart });
  };

  render() {
    return (
      <Container>
        <Filter
          valorMin={this.state.valorMin}
          valorMax={this.state.valorMax}
          procurarNome={this.state.procurarNome}
          onChangeInputValorMin={this.onChangeInputValorMin}
          onChangeInputValorMax={this.onChangeInputValorMax}
          onChangeInput={this.onChangeInput}  
        />

        <Home
          executar={this.addToCart.bind(this)}
          executar2={this.addQuantidade.bind(this)}
          produtos={this.state.produtos}
          carrinho={this.state.carrinho}
          valorMin={this.state.valorMin}
          valorMax={this.state.valorMax}
          procurarNome={this.state.procurarNome}
          onOrdenaOption={this.onChangeInputOrdena}
          ordena={this.state.ordena}
        />

        {this.state.carrinho.length !== 0 && (
          <Carrinhos
            carrinho={this.state.carrinho}
            executar={this.removerItem.bind(this)}
          />
        )}

        <GlobalStyle />
      </Container>
    );
  }
}

export default App;