import React, { Component } from 'react';
import logo from '../logo.svg';
class Home extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="/"
        >
          Hello World!
        </a>
      </header>
    </div>
    );
  }
}

export default Home;