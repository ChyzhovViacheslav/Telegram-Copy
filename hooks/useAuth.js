import { useAppSelector } from "./redux";

export default function useAuth(){
    const {email, _id, username, image} = useAppSelector(state => state.authSlice)
    return {
        isAuth: !!email,
        email,
        _id,
        username,
        image
    }
}