import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const authUser = createApi({
    reducerPath: 'authUser',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:2000/user',
        credentials: 'include'
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
        })
    })
})