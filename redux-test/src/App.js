import React, { Component } from 'react'
import { connect } from 'react-redux' //HOC функция
import './App.css'


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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    //теперь каунтер можно использовать в Арр компоненте не как state а как props
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({ type: 'ADD' }),
    onSub: () => dispatch({ type: 'SUB' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App) //вызываем функцию и после этого она нам что-то вернёт и мы её вызовем уже с компонентом Арр