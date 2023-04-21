import { useAppSelector } from "./redux";

export default function useAuth() {
    const {
        email,
        id,
        username,
        images,
        accessToken,
        expiresAt,
        firstname,
        lastname,
        bio 
    } = useAppSelector(state => state.authSlice)

    return {
        isAuth: !!email,
        email,
        id,
        username,
        images,
        accessToken,
        expiresAt,
        firstname,
        lastname,
        bio
    }
}