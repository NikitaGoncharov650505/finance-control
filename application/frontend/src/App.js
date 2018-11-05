import React, { Component } from 'react';
import './App.css';
import Investments from './components/investments/investments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Investments />
        <Investments />
        <Investments />
        <Investments />
      </div>
    );
  }
}

export default App;
