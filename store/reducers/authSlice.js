import { createSlice } from "@reduxjs/toolkit"
import { roomService } from "../../services/RoomService"

const initialState = {
    email: null,
    username: null,
    image: null,
    id: null,
    accessToken: null,
    refreshToken: null,
    expiresAt: null
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setUser(state, action){
            state.email = action.payload.email
            state.username = action.payload.username
            state.image = action.payload.image
            state.id = action.payload.id
        },
        removeUser(state, action){
            state.email = null
            state.username = null
            state.image = null
            state.id = null
        },
        setToken(state, action){
            state.accessToken = action.payload.accessToken
            state.expiresAt = action.payload.expiresAt
            state.refreshToken = action.payload.refreshToken
        },
        removeToken(state, action){
            state.accessToken = null
            state.expiresAt = null
            state.refreshToken = null
        }
    }
})
export const {setUser, removeUser, setToken, removeToken} = authSlice.actions
export default authSlice.reducer