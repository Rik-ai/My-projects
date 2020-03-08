import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world !</h1>
      </div>
    );


    //Конструкция Реакта, как видит интерпритатор
    // return React.createElement(
    //   'div',
    //   {
    //     className: 'App' //опции div,
    //   },
    //   React.createElement(
    //     'h1',  //опции h1
    //     null,
    //     'Hello world !'
    //   )
    //);
  }
}

export default App;
