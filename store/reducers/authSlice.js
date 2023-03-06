import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    some: 'some'
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        changeSome(state, action){
            state.some = action.payload
        }
    }
})

export default authSlice.reducer