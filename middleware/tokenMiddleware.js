import { useAppDispatch } from "../hooks/redux";
import { setToken } from "../store/reducers/authSlice";

const getNewAccessToken = async () => {
    const response = await fetch('http://localhost:2000/user/refresh', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
    const data = await response.json()

    return data
}

export const tokenMiddleware = (store) => (next) => async (action) => {
    const state = store.getState();
    const expiresAt = state.authSlice.expiresAt;
    const now = Date.now()
    if (now > Date.parse(expiresAt) && expiresAt !== null) {
        console.log('getting new token')

        const newToken = await getNewAccessToken();
        store.dispatch(setToken(newToken));
    }

    return next(action);
};