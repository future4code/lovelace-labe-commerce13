import React from 'react';
import Nav from './Nav/Nav';
// import Products from './Products/Products';

class Home extends React.Component {
  addCartObject = (id, name, price, quantidade) => {
    return {
      id: id,
      name: name,
      price: price,
      quantidade: quantidade,
    };
  };

  render() {
    return (
      <section>
        <Nav produtos={this.props.produtos} />
        <main>
          {this.props.produtos.map(
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
                  onClick={() =>
                    this.props.executar(
                      this.addCartObject(id, name, price, quantidade)
                    )
                  }
                  type="button"
                >
                  Adcionar ao carrinho
                </button>
              </div>
            )
          )}
        </main>
      </section>
    );
  }
}

export default Home;
