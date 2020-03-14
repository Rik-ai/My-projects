import React, { Component } from 'react';
import classes from './Car.css'
import './Car.css'
import withClass from '../hoc/withClass'

// теперь компонент Car наследуется от реакт компонента, теперь доступен локальный стейт(хз что это) и разные жизненные циклы
class Car extends React.Component {


    render() {
        console.log('Car render')

        const inputClasses = ['input']

        if (this.props.name !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }

        if (this.props.name.length > 4) {
            inputClasses.push('bold')
        }

        return (
            <React.Fragment>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    type='text'
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')} //данный параметр не понмает массивы по этому  мы передаём массив и превращяем его в строку через .join который соединяет каким-то символом все элементы в массиве
                />
                <button onClick={this.props.onDelete}>Delete!</button>
            </React.Fragment>
        )
    }
}



export default withClass(Car, classes.Car)