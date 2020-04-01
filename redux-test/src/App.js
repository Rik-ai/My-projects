import React, { Component } from 'react'
import { connect } from 'react-redux' //HOC функция
import './App.css'
import Counter from './Counter'
import { add, sub, addNumber, asyncAdd } from './redux/actions/actions'



class App extends Component {



  render() {
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr />

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>
        <div className="Actions">
          <button onClick={() => this.props.onAddNumber(15)}>Добавить 15</button>
          <button onClick={() => this.props.onAddNumber(-17)}>Вычесть 17</button>
        </div>
        <div className="Actions">
          <button onClick={() => this.props.onAddNumber(100)}>
            Асинхронно добавить 100
            </button>
        </div>

        <Counter />
      </div >
    )
  }
}

function mapStateToProps(state) {
  return {
    //теперь каунтер можно использовать в Арр компоненте не как state а как props
    counter: state.Counter1.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add(), { value: 1 }),
    onSub: () => dispatch(sub(), { value: 1 }),
    onAddNumber: number => dispatch(addNumber(number)),
    onAsyncAdd: number => dispatch(asyncAdd(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App) //вызываем функцию и после этого она нам что-то вернёт и мы её вызовем уже с компонентом Арр