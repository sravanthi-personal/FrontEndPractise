const {cakeActions} = require('../cake/cakeSlice')
const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIceCreams : 20
}

const iceCreamSlice = createSlice({
    name : 'icecream',
    initialState: initialState,
    reducers : {
        ordered : (state) => {
            state.numOfIceCreams--
        },
        restocked : (state,action) => {
            state.numOfIceCreams = state.numOfIceCreams + action.payload
        }
    },
    // extraReducers : {
    //     ['cake/ordered'] : (state,action) => {
    //         state.numOfIceCreams--
    //     }
    // }

    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state,action) => {
            state.numOfIceCreams--
        })
    }

});

module.exports = iceCreamSlice.reducer;
module.exports.icecreamActions = iceCreamSlice.actions;