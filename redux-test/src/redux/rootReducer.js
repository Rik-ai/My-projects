

const initialState = {
    counter: 0
}



export default function rootReducer(state = initialState, action) {
    //Важное правила Редьюсера - всегда возвращать новый обьект
    switch (action.type) {
        case 'ADD':
            return {
                counter: state.counter + 1
            }
        case 'SUB':
            return {
                counter: state.counter - 1
            }
    }



    return state
}