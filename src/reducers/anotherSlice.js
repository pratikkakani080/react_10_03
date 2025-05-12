import { createSlice } from '@reduxjs/toolkit'

const AnotherSLice = createSlice({
    name: 'another',
    initialState: {
        loading: 'init',
    },
    reducers: {

    },
    // extraReducers: API call
})

export const {  } = AnotherSLice.actions
export default AnotherSLice.reducer