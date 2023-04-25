import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tokenMiddleware } from "../middleware/tokenMiddleware";
import { authUser } from "../services/AuthUser";
import { roomService } from "../services/RoomService";
import authSlice from "./reducers/authSlice";
import roomSlice from './reducers/roomSlice';
import searchSlice from "./reducers/searchSlice";
import modalsSlice from "./reducers/modalsSlice";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    authSlice,
    roomSlice,
    modalsSlice,
    searchSlice,
    [authUser.reducerPath]: authUser.reducer,
    [roomService.reducerPath]: roomService.reducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authSlice', 'roomSlice']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
            .concat(thunk, authUser.middleware, roomService.middleware, tokenMiddleware)
    })
}

export const persistor = persistStore(setupStore())