import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'


const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>3.</strong>&nbsp; {/*&nbsp  добавляет символ пробела в js */}
                    {props.question}
                </span>

                <small>6 bp 666</small>
            </p>

            <AnswersList
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
    )
}
export default ActiveQuiz