import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world !</h1>
      </div>
      <p>Hello</p> //вывести параграф не получится так как должен быть корневой элемент типа <div></div>
    );
  }
}

export default App;
