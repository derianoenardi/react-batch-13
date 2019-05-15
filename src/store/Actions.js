import axios from 'axios'

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchingUser())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            return dispatch(insertPeople(res.data))
        })
    }
}

export const incrementAction = () => ({
    type: 'INCREMENT'
})

export const decrementAction = () => ({
    type: 'DECREMENT'
})

export const insertPeople = (data) => ({
    type: 'INSERT_PEOPLE',
    payload: data
})

export const fetchingUser = () => ({
    type: 'FETCH_USER'
})