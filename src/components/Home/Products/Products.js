import React from 'react';
import Product from './Product/Product';

class Products extends React.Component {
  render() {
    return (
      <main>
        <Product nome={'Produto legal'} preco={'120,00'} />
        <Product nome={'Produto legal'} preco={'120,00'} />
      </main>
    );
  }
}

export default Products;
