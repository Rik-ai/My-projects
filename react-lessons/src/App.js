import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './Car/Car'

class App extends Component {
  render() {
    const divStyle = {
      'textAlign': 'center'
    }
    return (
      <div style={divStyle}>
        <h1>Hello world !</h1>

        <Car />
        <Car />

      </div>
    );
  }
}

export default App;
