import React, { Component } from 'react'
import Auxiliary from '../hoc/Auxiliary' //hoc - это Hightet order components

export default class Counter extends Component {
    state = {
        counter: 0
    }
    //оживляем кнопки
    addCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }


    render() {
        // return (
        //     <div>
        //         <h2>Counter{this.state.counter}</h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
        //     </div>
        // )

        //то же самое что и выше просто без дива и выводим как массив, но необходимо для каждого элемента создавать свой уникальный ключ
        // return [
        //     <h2 key={'1'}>Counter{this.state.counter}</h2>,
        //     <button key={'2'} onClick={this.addCounter}>+</button>,
        //     <button key={'3'} onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>

        // ]

        //ещё один вариант c созданием отдельного файла JS
        return (
            <Auxiliary>
                <h2>Counter{this.state.counter}</h2>
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
            </Auxiliary>
        )
    }
}