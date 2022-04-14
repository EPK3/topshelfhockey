import React, { Component } from 'react';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Register from './Pages/Register';
import Login from './Pages/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Cart/>
      </div>
    );
  }
}

export default App;
