import React from 'react'
import classes from './ActiveQuiz.module.css'


const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>3.</strong>&nbsp; {/*&nbsp  добавляет символ пробела в js */}
                 How are you?
            </span>

            <small>6 bp 666</small>
        </p>

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
)

export default ActiveQuiz