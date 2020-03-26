import React, { Component } from 'react'
import classes from './QuizCreator.module.css'
import Button from '../../Components/Ui/Button/Button'

export default class QuizCreator extends Component {

    submitHandler = e => {
        e.preventDefault()
    }

    addQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit={this.submitHandler}>

                        <input type='text' />
                        <hr />
                        <input type='text' />
                        <input type='text' />
                        <input type='text' />
                        <input type='text' />


                        <select></select>

                        <Button
                            type='primary'
                            onClick={this.addQuestionHandler}
                        >
                            Добавить вопрос
                    </Button>
                        <Button
                            type='succes'
                            onClick={this.createQuizHandler}
                        >
                            Создать тест
                     </Button>
                    </form>
                </div>
            </div>
        )
    }
}