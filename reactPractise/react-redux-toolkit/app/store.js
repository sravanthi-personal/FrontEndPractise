
// import { reduxlogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import userReducer from '../features/user/userSlice';

// const logger = reduxlogger.createLogger()


const store = configureStore({
    reducer : {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user:userReducer
    },
    // middleware : (getDefaultMiddleWare) =>  getDefaultMiddleWare().concat(logger)
});

export default store;