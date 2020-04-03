import React, { useReducer } from 'react' //ЭТО ХУК
import { AlertContext } from './alertContext'
import { alertReducer } from './alertReducer'
import { HIDE_ALERT, SHOW_ALERT } from '../types'


export const AlertState = ({ children }) => {
    const [state, dispatch] = useReducer(alertReducer, null) //useReducer - всегда возвращает массив из двух параметров где первый это state и второй это функция dispatch

    const hide = () => dispatch({ type: HIDE_ALERT })

    const show = (text, type = 'secondaary') => {
        dispatch({
            type: SHOW_ALERT,
            payload: { type, text }
        })
    }


    return (
        <AlertContext.Provider value={{
            hide, show, alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}