import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const divStyle = { //так можно стилизовать обьект в нутри функции
      'textAlign': 'center'
    }
    return (
      <div style={divStyle}>
        {/* правильная запись для стилизации отдельных элементов */}
        <h1 style={{ color: 'blue', 'fontSize': '20px' }}>Hello world !</h1>
      </div>
    );
  }
}

export default App;
