

const initialState = {
    counter2: 200
}



export default function Counter2(state = initialState, action) {
    //Важное правила Редьюсера - всегда возвращать новый обьект
    switch (action.type) {
        case 'ADD2':
            return {
                counter2: state.counter2 + action.payload
            }

        default:
            return state
    }
}