import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    countValue:0
}

export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:state=>{ state.countValue++; return state; },
        decrement: state => { state.countValue--; return state; },
        reset:state=>{ state.countValue = 0; return state; },
    }
})

export const {increment, decrement, reset} = CounterSlice.actions
export default CounterSlice.reducer