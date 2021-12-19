import * as types from './actionType'
import Axios from 'axios';

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
})

const deleteUser = () => ({
    type: types.DELETE_USER,
})

export const loadUsers = () => {
    return function(dispatch) {
        Axios.get('http://localhost:5000/user')
        .then(res => {
            console.log(res)
            dispatch(getUsers(res.data))
        }) 
        .catch(err => console.log(err))
    }
}

export const deleteUserAction = (id) => {
    return function(dispatch) {
        Axios.delete(`http://localhost:5000/user/${id}`)
        .then(res => {
            console.log(res)
            dispatch(deleteUser())
            dispatch(loadUsers())
        }) 
        .catch(err => console.log(err))
    }
}