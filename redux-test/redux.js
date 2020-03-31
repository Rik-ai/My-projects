const redux = require('redux')

const initialState = {
    counter: 0
}


//Reducer - обычная JS функция которая делает некоторые преобразования
const reducer = (state = initialState, action) => { //2)в reducer мы описали начальное состояние которое получается из констатны counter: 0
    //3) и если попадает некоторый action с помощью dispach то тогда будем проверять action.type, сли он совпадает с тем что мы обрабатываем 'ADD'
    if (action.type === 'ADD') {
        return {
            counter: state.counter + 1 //4) то тогда будем модифицировать наш стейт с помощью предыдущего состояния и возвращяем новый стейт
        }
    }
    if (action.type === 'SUB') {
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === 'ADD_NUMBER') {
        return {
            counter: state.counter + action.value
        }
    }

    return state

}

//Store - там где хранятся все данные
const store = redux.createStore(reducer) //1) создали store куда передали функцию reducer которая изменяет данный стор

//таким образом мы как бы подписываемся на любое изменение Store
store.subscribe(() => {
    console.log('Subscribe', store.getState())
})

//Actions
const addCounter = {
    type: 'ADD'
}

store.dispatch(addCounter) //с помощью этой функции можно диспатчить новые экшены

store.dispatch({ type: 'SUB' })

store.dispatch({ type: 'ADD_NUMBER', value: 10 }) //можно так же задавать дополнительные поля
