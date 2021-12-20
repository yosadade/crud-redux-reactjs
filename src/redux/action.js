import * as types from './actionType'
import Axios from 'axios';

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
})

const deleteUser = () => ({
    type: types.DELETE_USER,
})

const addUser = () => ({
    type: types.ADD_USER,
})

const updateUser = () => ({
    type: types.UPDATE_USER,
})

const getSingleUser = (users) => ({
    type: types.GET_SINGLE_USER,
    payload: users,
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

export const AddUserAction = (form) => {
    return function(dispatch) {
        Axios.post(`http://localhost:5000/user`, form)
        .then(res => {
            console.log(res)
            dispatch(addUser())
            dispatch(loadUsers())
        }) 
        .catch(err => console.log(err))
    }
}

export const updateUserAction = (form, id) => {
    return function(dispatch) {
        Axios.put(`http://localhost:5000/user/${id}`, form)
        .then(res => {
            console.log(res)
            dispatch(updateUser())
            dispatch(loadUsers())
        }) 
        .catch(err => console.log(err))
    }
}

export const getSingleUserAction = (id) => {
    return function(dispatch) {
        Axios.get(`http://localhost:5000/user/${id}`)
        .then(res => {
            console.log(res)
            dispatch(getSingleUser(res.data))
            dispatch(loadUsers())
        }) 
        .catch(err => console.log(err))
    }
}