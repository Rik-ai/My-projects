import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../Components/AtiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: 'Какого хрена ?',
                rightAnswerId: 4,
                id: 1,
                answers: [
                    { text: 'Просто', id: 1 },
                    { text: 'Не просто', id: 2 },
                    { text: 'Сложно', id: 3 },
                    { text: 'Ораньжевый', id: 4 }
                ]
            },
            {
                question: 'Какой вопрос ?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    { text: 'Просто', id: 1 },
                    { text: 'Не просто', id: 2 },
                    { text: 'Яблоко', id: 3 },
                    { text: 'Не яблоко', id: 4 }
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        console.log('Answer Id: ', answerId)

        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }


    render() {
        return (
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>

                    <h1>Answer the Question !</h1>

                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz