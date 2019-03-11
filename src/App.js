import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./style/Header"
import SearchCard from "./components/SearchCard"
class App extends Component {
  render() {
    return (
      <div className="App">
          <header>
          <Header />
          </header>
          <body className="Body-Style">
          <SearchCard />
          </body>
      </div>
    );
  }
}

export default App;
