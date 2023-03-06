import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const authUser = createApi({
    reducerPath: 'authUser',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:2000/user'
    }),
    endpoints: (build) => ({
        getAllUsers: build.query({
            query: () => ({
                url: `/users`,
                method: 'GET',
                params
            })
        }),
    })
})