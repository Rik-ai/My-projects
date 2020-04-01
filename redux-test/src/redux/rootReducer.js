import { combineReducers } from 'redux' //позволяет обьединять все редьюсеры в один который эта функция нам вернёт

import Counter1 from './Reducers/Counter1'
import Counter2 from './Reducers/Counter2'

export default combineReducers({
    Counter1, Counter2
})