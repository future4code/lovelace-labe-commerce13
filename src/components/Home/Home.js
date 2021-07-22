import React from 'react';
import Nav from './Nav/Nav';
// import Products from './Products/Products';

class Home extends React.Component {
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
  };

  addCartObject = (id, name, price, quantidade) => {
    console.log(quantidade);
    return {
      id,
      name,
      price,
      quantidade,
    };
  };

  render() {
    return (
      <section>
        <Nav produtos={this.state.produtos} />
        <main>
          {this.state.produtos.map(
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
                    const oi = carrinhoCopia.reduce((acc, item) => {
                      console.log(acc);
                      if (acc.toLowerCase() === item.name.toLowerCase()) {
                        this.props.executar2(id);
                        return item.name;
                      } else {
                        this.props.executar(
                          this.addCartObject(id, name, price, quantidade)
                        );
                        return item.name;
                      }
                    }, '');
                  }}
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
