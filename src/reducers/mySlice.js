import { createSlice } from '@reduxjs/toolkit'

const MySlice = createSlice({
    name: 'my',
    initialState: {
        loading: 'init',
        count: 0,
        data: []
    },
    reducers: {
        increment: (state, action) => {
            console.log(action);
            
            state.count += action.payload
            state.loading = 'loading'
        },
        decrement: (state, action) => {
            state.count -= action.payload
        }
    },
    // extraReducers: API call
})

export const { increment, decrement } = MySlice.actions
export default MySlice.reducer