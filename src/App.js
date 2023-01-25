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
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
    <Router>      
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">React</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active"><Link to={'/'} className="nav-link"> Home </Link></li>
              <li class="nav-item"><Link to={'/contact'} className="nav-link">Contact</Link></li>
              <li class="nav-item"><Link to={'/about'} className="nav-link">About</Link></li>
              <li class="nav-item"><Link to={'/items'} className="nav-link">Render Items</Link></li>
            </ul>
          </div>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
          <hr />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/items' element={<Instruction />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

