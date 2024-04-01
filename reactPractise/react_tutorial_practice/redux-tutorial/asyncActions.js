
const redux = require('redux');
const thunkMiddleWare = require('redux-thunk').default;
const axios = require('axios');

const createStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;


const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequestActionCreator = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}


const fetchUsersSuccessActionCreator = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload : users
    }
}

const fetchUsersErrorActionCreator = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        error:error
    }
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST: 
            return {
                ...state, 
                loading: true
            }
        case FETCH_USERS_SUCCESS: 
            return {
                ...state, 
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE: 
            return {
                ...state, 
                loading: false,
                users : [],
                error: action.error
            }
    }
}

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequestActionCreator());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data.map(user => user.id)
            dispatch(fetchUsersSuccessActionCreator(users));
        })
        .catch(error => {
            dispatch(fetchUsersErrorActionCreator(error.message))
        })
    }
}


const store = createStore(reducer,applyMiddleWare(thunkMiddleWare));

store.subscribe(() => console.log(store.getState()))

store.dispatch(fetchUsers());
