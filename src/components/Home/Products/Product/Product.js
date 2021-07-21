import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <div>
        <figure>
          <img src={this.props.img} alt={this.props.nome} />
        </figure>
        <div>
          <p>{this.props.nome}</p>
          <p>R${this.props.preco}</p>
        </div>
        <button type="button">Adcionar ao carrinho</button>
      </div>
    );
  }
}

export default Product;
