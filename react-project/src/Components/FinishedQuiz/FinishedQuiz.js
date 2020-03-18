import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = props => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong>1. </strong> Text
                     <i className={'fa fa-times ' + classes.error} /> {/*крестик */}
                </li>
                <li>
                    <strong>1. </strong> Text
                     <i className={'fa fa-check ' + classes.success} /> {/*галочка */}
                </li>
            </ul>

            <p>Правильно 0 из 666</p>

            <div>
                <button>Повтор</button>
            </div>
        </div>
    )
}

export default FinishedQuiz