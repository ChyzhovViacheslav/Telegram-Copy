import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentRoom: null,
    currentUser: null
}

export const roomSlice = createSlice({
    name: 'roomSlice',
    initialState,
    reducers: {
        changeCurrentRoom(state, action){
            state.currentRoom = action.payload
        },
        changeCurrentUser(state, action){
            state.currentUser = action.payload
        }
    }
})

export const {changeCurrentRoom, changeCurrentUser} = roomSlice.actions
export default roomSlice.reducer