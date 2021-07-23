import React from 'react';
import Carrinho from './Carrinho';

class Carrinhos extends React.Component {
  totalValue = () => {
    let valueFinish = this.props.carrinho.reduce(
      (acc, { price, quantidade }) => acc + price * quantidade,
      0
    );
    return valueFinish;
  };

  render() {
    return (
      <div>
        <h3>Carrinho</h3>
        {this.props.carrinho.map(({ id, name, quantidade }, index) => (
          <div key={index}>
            <Carrinho quantidade={quantidade} nomeProduto={name} />
            <label>Cupom:</label>
            <input type="text"></input>
            <button onClick={() => this.props.executar(id)}>Remover</button>
          </div>
        ))}
        <p>Valor Total: R${this.totalValue()},00</p>
      </div>
    );
  }
}

export default Carrinhos;
