import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./userTypes";
import axios from "axios";

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest);
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const data = response.data;
            dispatch(fetchUsersSuccess(data));
        })
        .catch(error => {
            dispatch(fetchUsersFailure(error));
        })
    }
}

