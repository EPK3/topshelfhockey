import React, { Component } from 'react';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ScrollToTop from './Components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StateContext } from './context/StateContext';
import { Toaster } from 'react-hot-toast';

class App extends Component {
  render() {
    return (
      <div>
          <ScrollToTop>
            <StateContext>
            <Toaster/>
            <Routes>
              <Route index path='/topshelfhockey' element={<Home/>} />
              <Route path='/products/' element={<ProductList/>}/>
              <Route path='/product/:slug' element={<Product/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
            </StateContext>
          </ScrollToTop>
      </div>
    );
  }
}

export default App;
