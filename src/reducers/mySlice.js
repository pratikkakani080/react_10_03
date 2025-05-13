import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk(
  'my/fetchTodos',
  async (data, thunkAPI) => {
    try {
        const response = await fetch('https://dummyjson.com/todos')
        const res = response.json()
        return res
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data)        
    }
  },
)


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
    extraReducers: (builder) => {
        builder
        .addCase(fetchTodos.pending, (state, action) => {
            state.loading = 'loading'
        })
        .addCase(fetchTodos.fulfilled, (state, action) => {
            console.log('action**', action);
            state.loading = 'success'
            state.data = action.payload?.todos
        })
        .addCase(fetchTodos.rejected, (state, action) => {
            console.log('action**', action);
            state.loading = 'failure'
            state.error = action.payload
        })
    }
})

export const { increment, decrement } = MySlice.actions
export default MySlice.reducer