import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: null,
    username: null,
    image: null,
    _id: null,
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setUser(state, action){
            state.email = action.payload.email
            state.username = action.payload.username
            state.image = action.payload.image
            state._id = action.payload._id
        },
        removeUser(state, action){
            state.email = null
            state.username = null
            state.image = null
            state._id = null
        }
    }
})
export const {setUser, removeUser} = authSlice.actions
export default authSlice.reducer