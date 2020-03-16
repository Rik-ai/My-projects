import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'


const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>3.</strong>&nbsp; {/*&nbsp  добавляет символ пробела в js */}
                 How are you?
            </span>

            <small>6 bp 666</small>
        </p>

        <AnswersList answers={props.answers} />
    </div>
)

export default ActiveQuiz