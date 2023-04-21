import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: null,
    username: null,
    images: null,
    id: null,
    accessToken: null,
    refreshToken: null,
    expiresAt: null,
    firstname: null,
    lastname: null,
    bio: null
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setUser(state, action){
            state.email = action.payload.email
            state.username = action.payload.username
            state.images = action.payload.images
            state.id = action.payload.id
            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
            state.bio = action.payload.bio
        },
        removeUser(state){
            state.email = null
            state.username = null
            state.images = null
            state.id = null
            state.firstname = null
            state.lastname = null
            state.bio = null
        },
        setToken(state, action){
            state.accessToken = action.payload.accessToken
            state.expiresAt = action.payload.expiresAt
            state.refreshToken = action.payload.refreshToken
        },
        removeToken(state){
            state.accessToken = null
            state.expiresAt = null
            state.refreshToken = null
        },
        setUserImage(state, action){
            state.images = [action.payload, ...state.images]
        },
        setUserInfo(state, action){
            state.username = action.payload.username
            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
            state.bio = action.payload.bio
        }
    }
})
export const {setUser, removeUser, setToken, removeToken, setUserImage, setUserInfo} = authSlice.actions
export default authSlice.reducer