import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  constructor(props) {
    // так как наследуемся от базового класса реакт компонента то необходимо вызвать метод супер, что бы конструктор отработал правильно
    super(props)

    this.state = {
      cars: [
        { name: 'Ford', year: 2018 },
        { name: 'Audi', year: 2016 },
        { name: 'Mazda', year: 2010 }
      ],
      pageTitle: 'React components',
      showCars: false
    }
  }


  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars] //получим новый склонированный массив т.к. когда мы меняем какое-то состояние мы должны создавать клоны
    cars[index] = car
    this.setState({ cars })
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat() //получим новый склонированный массив т.к. когда мы меняем какое-то состояние мы должны создавать клоны
    cars.splice(index, 1) //splice метод для удаления элемента, 1 значение индех элемента 2е значение количество удаляемых элементов


    this.setState({ cars })
  }





  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={e => this.onChangeName(e.target.value, index)}
          />
        )
      })
    }

    return (
      <div style={divStyle}>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>

        <button
          onClick={this.toggleCarsHandler}
        >Toggle cars</button>
        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          {cars}
        </div>
      </div>
    );
  }
}

export default App;