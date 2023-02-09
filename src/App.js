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
import Instruction from './components/Instruction';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserLogin from './components/UsersLogin';
import Header from './components/Header';
import Footer from './components/Header';
class App extends Component {
  render() {
    return (
    <Router>      
        <div>
        <Header/>
          <hr />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/items' element={<Instruction />} />
              <Route path='/login' element={<Login />} />
              <Route path='/userLogin' element={<UserLogin />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

