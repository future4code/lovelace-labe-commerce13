import React from 'react';
import Nav from './Nav/Nav'
import Products from './Products/Products';

class Home extends React.Component {

  render() {
    return <section>
      <Nav />
      <Products />
    </section>
  }
}

export default Home;