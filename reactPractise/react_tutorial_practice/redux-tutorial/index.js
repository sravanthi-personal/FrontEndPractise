const redux = require('redux');
const reduxLogger = require('redux-logger')

const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware;

const logger = reduxLogger.createLogger();


const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

//action creator --> is a function that returns an action 
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux application'
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM
    }
}

const initialCakeState = {
    numberOfCakes : 10
}

const initialIceCreamState = {
    numberOfIceCreams : 20
}


const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE : 
            return {
                ...state,
                numberOfCakes : state.numberOfCakes - 1
            }
        default: return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM : 
            return {
                ...state,
                numberOfIceCreams : state.numberOfIceCreams - 1
            }
        default: return state;
    }
}

const rootReducer = combineReducer({ 
    cake: cakeReducer, 
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer,applyMiddleWare(logger));

console.log("initial state " , store.getState());

const unsubscribe = store.subscribe( () => console.log("Updated state ", store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();