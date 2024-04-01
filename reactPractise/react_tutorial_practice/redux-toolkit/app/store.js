const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeSlice');
const icecreamReducer = require('../features/icecream/icecreamSlice');
const userReducer = require('../features/user/userSlice');
const reduxlogger = require('redux-logger');

const logger = reduxlogger.createLogger()


const store = configureStore({
    reducer : {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user:userReducer
    },
    middleware : (getDefaultMiddleWare) =>  getDefaultMiddleWare().concat(logger)
});

module.exports = store;