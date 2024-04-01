import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfCakes : 10
}

const cakeSlice = createSlice({
    name : 'cake',
    initialState : initialState,
    reducers : {
        ordered : (state,action) => {
            state.numOfCakes--
        },
        restocked: (state,action) =>{
            state.numOfCakes = state.numOfCakes + action.payload
        }
    }
})

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions