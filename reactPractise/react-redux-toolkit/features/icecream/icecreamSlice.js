import { createSlice } from '@reduxjs/toolkit'

import { ordered as cakeOrdered } from '../cake/cakeSlice'


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
        builder.addCase(cakeOrdered, (state,action) => {
            state.numOfIceCreams--
        })
    }

});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;