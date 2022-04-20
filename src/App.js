import React, { Component } from 'react';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ScrollToTop from './Components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollToTop>
        <Routes>
          <Route index path='/topshelfhockey' element={<Home/>} />
          <Route path='/products/' element={<ProductList/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        </ScrollToTop>
      </div>
    );
  }
}

export default App;
