import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
class Header extends Component {
  render() {
    return (
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white">
        <div class="container">
            <button 
                class="navbar-toggler" 
                type="button" 
                data-mdb-toggle="collapse" 
                data-mdb-target="#navbarSupportedContent1" 
                aria-controls="navbarSupportedContent1" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link"><Link to={'/'} className="nav-link">Home</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><Link to={'/contact'} className="nav-link">Post</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><Link to={'/about'} className="nav-link">Exchange</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><Link to={'/products'} className="nav-link">Render Products</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><Link to={'/userLogin'} className="nav-link">Render Items</Link></a>
                    </li>
                </ul>
            </div>
            <div class="d-flex align-items-center">
                <a class="nav-link me-3" href="#">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="badge rounded-pill badge-notification bg-danger">1</span>
                </a>
    
                <a class="nav-link me-3" href="#">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a class="nav-link me-3" href="#">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/RichardMarkRoss" class="border rounded px-2 nav-link" target="_blank"> <i class="fab fa-github me-2"></i>GitHub</a>
            </div>
        </div>
    </nav>
    );
  }
}

export default Header;


