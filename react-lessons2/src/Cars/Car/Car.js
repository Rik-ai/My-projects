import React from 'react'
import './Car.scss'
// с помощью withRouter мы получим доступ ко всем параметрам Car, оборачивает функциональные компоненты и добовляет им как свойство все параметры от Роутера
import { withRouter } from 'react-router-dom'


const Car = props => {
  return (
    <div className={'Car'}
      onClick={() => props.history.push('/cars/' + props.name.toLowerCase())}
    >
      <h3>Сar name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
    </div>
  )
}

export default withRouter(Car)