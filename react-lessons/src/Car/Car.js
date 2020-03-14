import React, { Component } from 'react';
import Radium from 'radium'
import './Car.css'

// теперь компонент Car наследуется от реакт компонента, теперь доступен локальный стейт(хз что это) и разные жизненные циклы
class Car extends React.Component {

    componentWillReceiveProps(nextProps) {
        console.log('Car componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Car shouldComponentUpdate', nextProps, nextState)
        return nextProps.name.trim() !== this.props.name.trim()

    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Car componentWillUpdate', nextProps, nextState)

    }
    //делает то же самое что и WillUpdate но запрещает работу с преобразованием стейта на прямую
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('Car getDerivedStateFromProps', nextProps, prevState)

    //     returnprevState
    // }

    componentDidUpdate() {
        console.log('Car componentDidUpdate')

    }
    //позволяет получить не изменённое дом дерево ещё до обновления
    // getSnapshotBeforeUpdate() {
    //     console.log('Car getSnapshotBeforeUpdate')
    // }

    componentWillUnmount() {
        console.log('Car componentWillUnmount')
    }


    render() {
        console.log('Car render')

        if (Math.random() > 0.7) {
            throw new Error('Car random failed')
        }


        const inputClasses = ['input']

        if (this.props.name !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }

        if (this.props.name.length > 4) {
            inputClasses.push('bold')
        }

        const style = {
            border: '3px solid #ccc',
            boxShadow: '0 4px 5px 0 rgba(0,0,0, .14)',
            ':hover': { //псевдоселектор с которым при наведении мышки на обьект он будет выделятся
                border: '2px solid #aaa',
                boxShadow: '0 4px 15px 0 rgba(0,0,0, .25)',
                cursor: 'pointer'
            }
        }

        return (
            <div className='Car' style={style}>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    type='text'
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')} //данный параметр не понмает массивы по этому  мы передаём массив и превращяем его в строку через .join который соединяет каким-то символом все элементы в массиве
                />
                <button onClick={this.props.onDelete}>Delete!</button>
            </div>
        )
    }
}



export default Car