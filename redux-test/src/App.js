import React, { Component } from 'react'
import { connect } from 'react-redux' //HOC функция
import './App.css'


class App extends Component {
  updateCounter(value) {
    //   this.setState({
    //     counter: this.state.counter + value
    //   })
    // }

    render() {
      return (
        <div className={'App'}>
          <h1>Счетчик <strong>{this.props.counter}</strong></h1>

          <hr />

          <div className="Actions">
            <button onClick={() => this.updateCounter(1)}>Добавить 1</button>
            <button onClick={() => this.updateCounter(-1)}>Вычесть 1</button>
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

export default connect(mapStateToProps)(App) //вызываем функцию и после этого она нам что-то вернёт и мы её вызовем уже с компонентом Арр