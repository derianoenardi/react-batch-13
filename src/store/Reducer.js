import { createStore } from 'redux'

const myData = {
    counter: 1,
    title: 'kosong',
    text: 'string',
    people: [],
    isLogin: false
}

const myReducer = (state = {...myData}, action) => {
    switch(action.type){
        case 'INCREMENT':
        return({
            ...state,
            counter: state.counter + 1
        });
        case 'DECREMENT':
        return({
            ...state,
            counter: state.counter - 1
        });
        case 'INSERT_PEOPLE':
        return({
            ...state,
            people: action.payload
        })
        default:
        return state
    }
}

export const incrementAction = () => ({
    type: 'INCREMENT'
})

export const decrementAction = () => ({
    type: 'DECREMENT'
})

export const store = createStore(myReducer)
