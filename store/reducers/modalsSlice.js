import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentNotificationType: null,
    notificationIsActive: false
}

export const modalsSlice = createSlice({
    name: 'modalsSlice',
    initialState,
    reducers: {
        openNotification(state){
            state.notificationIsActive = true
        },
        closeNotification(state){
            state.notificationIsActive = false
        },
        setCopyNotification(state){
            state.currentNotificationType = 'copy'
        },
        clearTypeNotification(state){
            state.currentNotificationType = null
        }
    }
})

export const {openNotification, closeNotification, setCopyNotification, clearTypeNotification} = modalsSlice.actions
export default modalsSlice.reducer