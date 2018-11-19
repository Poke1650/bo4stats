import React, { Component } from 'react';
import './App.css';

import Header from "./component/Header";
import Content from './component/Content';
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
