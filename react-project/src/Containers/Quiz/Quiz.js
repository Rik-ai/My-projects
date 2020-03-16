import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../Components/AtiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state = {
        quiz: [
            {
                question: 'Какого хрена ?',
                rightAnswerId: 4,
                answers: [
                    { text: 'Просто', id: 1 },
                    { text: 'Не просто', id: 2 },
                    { text: 'Сложно', id: 3 },
                    { text: 'Ораньжевый', id: 4 }
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        console.log('Answer Id: ', answerId)
    }


    render() {
        return (
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>

                    <h1>Answer the Question !</h1>

                    <ActiveQuiz
                        answers={this.state.quiz[0].answers}
                        question={this.state.quiz[0].question}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz