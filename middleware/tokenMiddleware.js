const getNewAccessToken = async () => {
    const response = await fetch('http://localhost:2000/user/refresh', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })

    const token = await response.json()
    return token
}

export const tokenMiddleware = (store) => (next) => async (action) => {
    if (typeof window !== 'undefined') {
        const accessToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('accessToken='));
        
        if (!accessToken) {
            await getNewAccessToken();
        }
    }

    return next(action);
};