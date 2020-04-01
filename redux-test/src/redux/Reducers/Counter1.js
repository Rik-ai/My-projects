

const initialState = {
    counter: 0
}



export default function Counter1(state = initialState, action) {
    //Важное правила Редьюсера - всегда возвращать новый обьект
    switch (action.type) {
        case 'ADD':
            return {
                counter: state.counter + action.value
            }
        case 'SUB':
            return {
                counter: state.counter - action.value
            }
        case 'ADD_NUMBER':
            return {
                counter: state.counter + action.payload
            }
        default:
            return state
    }
}