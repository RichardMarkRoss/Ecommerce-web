import './App.css';
import React, { Component } from 'react';
// import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Checkout,Home,About,Currency,Products,UserLogin,Header,Footer,Login,Card} from './components/index';
class App extends Component {
  render() {
    return (
    <Router>
      <Header/>      
        <div>
          <hr />
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/Checkout' element={<Checkout />} />
              <Route path='/about' element={<About />} />
              <Route path='/products' element={<Products />} />
              <Route path='/userLogin' element={<UserLogin />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/Card' element={<Card />} />
          </Routes>
        </div>
        <Footer/>  
      </Router>
    );
  }
}

export default App;

