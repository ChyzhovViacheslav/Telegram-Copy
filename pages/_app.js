import { Provider } from 'react-redux'
import { setupStore } from '../store/store.js';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import '../styles/global.css'

const store = setupStore()
const persistor = persistStore(store)

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    )
}