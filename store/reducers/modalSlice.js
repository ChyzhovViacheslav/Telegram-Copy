import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    authModal: false,
    settingsModal: false
}

export const modalSlice = createSlice({
    name: 'modalSlice',
    initialState,
    reducers: {
        changeAuthModal(state, action){
            state.authModal = action.payload
        },
        changeSettingsModal(state, action){
            state.settingsModal = action.payload
        }
    }
})

export const {changeAuthModal, changeSettingsModal} = modalSlice.actions
export default modalSlice.reducer