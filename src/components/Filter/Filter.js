import React from 'react';

class Filter extends React.Component {
  render() {
    return (
      <section>
        <h3>Filtros</h3>
        <div>
          <label>Valor mínimo:</label>
          <input
            value={this.props.valorMin}
            onChange={this.props.onChangeInputValorMin}
            type="number"
          />
        </div>
        <div>
          <label>Valor máximo:</label>
          <input
            value={this.props.valorMax}
            onChange={this.props.onChangeInputValorMax}
            type="number"
          />
        </div>
        <div>
          <label>Busca por nome:</label>
          <input
            value={this.props.procurarNome}
            onChange={(event) => {
              this.props.filterProduto();
              this.props.onChangeInput(event);
            }}
            type="text"
          />
        </div>
      </section>
    );
  }
}

export default Filter;
