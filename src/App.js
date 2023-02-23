import './App.css';
import React, { Component } from 'react';
// import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Currency from './components/Currency';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserLogin from './components/UsersLogin';
import Header from './components/Header';
import Footer from './components/Header';
class App extends Component {
  render() {
    return (
    <Router>
      <Header/>      
        <div>
          <hr />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/products' element={<Products />} />
              <Route path='/userLogin' element={<UserLogin />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

