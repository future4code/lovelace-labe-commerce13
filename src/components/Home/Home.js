import React from 'react';
import Nav from './Nav/Nav';
// import Products from './Products/Products';

class Home extends React.Component {
  addCartObject = (id, name, price, quantidade) => {
    return {
      id,
      name,
      price,
      quantidade,
    };
  };

  render() {
    const listProducts = () => {
      let finalProducts = [...this.props.produtos];

      if (this.props.valorMin) {
        const precoMin = Number(this.props.valorMin);

        finalProducts = finalProducts.filter((item) => item.price >= precoMin);
      }

      if (this.props.valorMax) {
        const precoMax = Number(this.props.valorMax);

        finalProducts = finalProducts.filter((item) => item.price <= precoMax);
      }

      if (this.props.procurarNome) {
        const procurar = this.props.procurarNome.toLowerCase().trim();
        finalProducts = finalProducts.filter((produto) =>
          produto.name.toLowerCase().includes(procurar)
        );
      }

      return finalProducts.map(
        ({ id, imgURL, name, price, quantidade }, index) => (
          <div key={index}>
            <figure>
              <img src={imgURL} alt={name} />
            </figure>
            <div>
              <p>{name}</p>
              <p>R${price}</p>
            </div>
            <button
              onClick={() => {
                this.props.executar(
                  this.addCartObject(id, name, price, quantidade)
                );
                const carrinhoCopia = [...this.props.carrinho];
                const nomeInclui = !carrinhoCopia
                  .map(({ name }) => name)
                  .includes(name);

                if (nomeInclui) {
                  this.props.executar(
                    this.addCartObject(id, name, price, quantidade)
                  );
                } else this.props.executar2(id);
              }}
              type="button"
            >
              Adcionar ao carrinho
            </button>
          </div>
        )
      );
    };
    return (
      <section>
        <Nav produtos={this.props.produtos} />
        <main>{listProducts()}</main>
      </section>
    );
  }
}

export default Home;
