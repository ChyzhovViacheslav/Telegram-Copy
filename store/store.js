import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authUser } from "../services/AuthUser";
import  authSlice  from "../store/reducers/authSlice.js";

const rootReducer = combineReducers({
    authSlice,
    [authUser.reducerPath]: authUser.reducer,
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
            .concat(authUser.middleware)
    })
}

export const persistor = persistStore(setupStore())