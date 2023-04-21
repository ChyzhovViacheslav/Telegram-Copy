import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const authUser = createApi({
    reducerPath: 'authUser',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:2000/user',
        credentials: 'include',
        prepareHeaders: (headers, { getState }) => {
            const { accessToken: token } = getState().authSlice

            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }

            return headers;
        },
    }),
    endpoints: (build) => ({
        getAllUsers: build.query({
            query: () => ({
                url: `/users`,
                method: 'GET',
            })
        }),
        loginUser: build.mutation({
            query: (body) => ({
                url: `/login`,
                method: 'POST',
                body
            })
        }),
        registerUser: build.mutation({
            query: (body) => ({
                url: '/register',
                method: 'POST',
                body
            })
        }),
        refreshToken: build.query({
            query: () => ({
                url: '/refresh',
                method: 'GET'
            })
        }),
        getOneUser: build.query({
            query: ({ id }) => ({
                url: `/user/${id}`,
                method: 'GET',
            })
        }),
        changeUserImage: build.mutation({
            query: ({id, file}) => ({
                url: `/image/${id}`,
                method: 'PUT',
                body: file,
                muiltipartFormData: true
            })
        }),
        changeUserInfo: build.mutation({
            query: (body) => ({
                url: `/info`,
                method: 'PUT',
                body
            })
        })
    })
})