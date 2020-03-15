import React, { Component } from 'react';
import './App.scss';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter'


class App extends Component {

  constructor(props) {
    // так как наследуемся от базового класса реакт компонента то необходимо вызвать метод супер, что бы конструктор отработал правильно
    super(props)

    this.state = {
      cars: [
        { name: 'Ford', year: 2018 },
        { name: 'Audi', year: '2016' },
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

  //1) вызывается тогда когда произошла инициализация реакт компонента, подготовлены все параметры и реакт компонент готов что бы его зарендерили (замаунтен)
  componentWillMount() {
    console.log('App componentWillMount')
  }
  //3) сообщает о том что HTML реакта готов и его можно преобразовывать
  componentDidMount() {
    console.log('App consoleDidMount')
  }

  //2) формирует конечный JSX который будет представлен в виде HTML
  render() {
    console.log('App render')
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>

            <Car
              name={car.name}
              year={car.year}
              onDelete={this.deleteHandler.bind(this, index)}
              onChangeName={e => this.onChangeName(e.target.value, index)}
            />
          </ErrorBoundary>
        )
      })
    }

    return (
      <div style={divStyle}>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>

        <Counter />

        <hr />


        <button
          style={{ marginTop: 20 }}
          className={'AppButton'}
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