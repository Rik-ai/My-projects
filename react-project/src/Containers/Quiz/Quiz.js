import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../Components/AtiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../Components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {
    state = {
        isFinished: true,
        activeQuestion: 0,
        answerState: null, //{[id]:'success' 'error'}
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
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }

        }
        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {
            this.setState({
                answerState: { [answerId]: 'success' }
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)


        } else {
            this.setState({
                answerState: { [answerId]: 'error' }
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }


    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer the Question !</h1>
                    {
                        this.state.isFinished
                            ? <FinishedQuiz


                            />
                            : <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }

                </div>
            </div>
        )
    }
}

export default Quiz