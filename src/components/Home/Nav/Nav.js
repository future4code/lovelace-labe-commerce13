import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <p>Quantidade de produtos: {this.props.produtos().length}</p>
        <label>
          Ordenação:
          <select onChange={(event) => this.props.onOrdenaOption(event)}>
            <option selected disabled value="DEFAULT">Selecionar</option>
            <option value="CRESCENTE">Crescente</option>
            <option value="DECRESCENTE">Decrescente</option>
          </select>
        </label>
      </nav>
    );
  }
}

export default Nav;
