import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { tokenMiddleware } from "../middleware/tokenMiddleware";
import { authUser } from "../services/AuthUser";
import { roomService } from "../services/RoomService"
import authSlice from "./reducers/authSlice";
import modalSlice from "./reducers/modalSlice";

const rootReducer = combineReducers({
    authSlice,
    modalSlice,
    [authUser.reducerPath]: authUser.reducer,
    [roomService.reducerPath]: roomService.reducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authSlice']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
            .concat(authUser.middleware, roomService.middleware, tokenMiddleware)
    })
}

export const persistor = persistStore(setupStore())