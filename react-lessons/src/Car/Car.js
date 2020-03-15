import React, { Component } from 'react';
import classes from './Car.css'
import PropTypes from 'prop-types'
import withClass from '../hoc/withClass'

// теперь компонент Car наследуется от реакт компонента, теперь доступен локальный стейт(хз что это) и разные жизненные циклы
class Car extends React.Component {

    //если создаём референцию в ручную то мы не используем колбэк функцию а просто передаём рееренцию на нужный элемент
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }


    componentDidMount() {
        if (this.props.index === 0) {
            this.inputRef.current.focus()
        }
    }


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
                    //если создаём референцию в ручную то мы не используем колбэк функцию а просто передаём рееренцию на нужный элемент
                    ref={this.inputRef}
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


Car.propTypes = {
    //названия полей которые мы ожидаем и функции
    //такая валидация и проверка свойств возможна только НЕ в функциональных компонентах которы определены через ключевое слово Class и наследуются от реакт компонента
    index: PropTypes.number,
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}



export default withClass(Car, classes.Car)
