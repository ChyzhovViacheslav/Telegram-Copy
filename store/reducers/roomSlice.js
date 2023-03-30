import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentRoom: null
}

export const roomSlice = createSlice({
    name: 'roomSlice',
    initialState,
    reducers: {
        changeCurrentRoom(state, action){
            state.currentRoom = action.payload
        },
    }
})

export const {changeCurrentRoom} = roomSlice.actions
export default roomSlice.reducer