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

        {/* если передаём обьект необходимо использовать {}, если передаём обычную строку то {} можно не использовать */}
        <Car name={'Ford'} year={2018}>
          <p style={{ color: 'green' }}>color</p>
        </Car>
        <Car name='Ferrary' year={2016}>
          <p style={{ color: 'red' }}>color</p>
        </Car>
        <Car name='Porshe' year={2010} />
      </div>
    );
  }
}

export default App;
