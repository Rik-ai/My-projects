import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  state = { //компонент который описывает состояние в котором находится данный обьект
    cars: [
      { name: 'Ford', year: '2018' },
      { name: 'Ferrary', year: '2016' },
      { name: 'Porshe', year: '2010' }
    ],
    pageTitle: 'React components'
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput = (e) => {
    this.setState({
      pageTitle: e.target.value
    })
  }




  render() {
    const divStyle = {
      'textAlign': 'center'
    }



    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <input type='text' onChange={this.handleInput} />

        <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change Title</button>

        {this.state.cars.map((car, index) => {
          return (
            <Car
              key={index}
              name={car.name}
              year={car.year}
              onChangeTitle={() => {
                this.changeTitleHandler(car.name)
              }}
            />
          )
        })}
      </div>
    );
  }
}

export default App;
