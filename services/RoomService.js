import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const roomService = createApi({
    reducerPath: 'roomService',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:2000/room',
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
        createRoom: build.mutation({
            query: (body) => ({
                url: `/room`,
                method: 'POST',
                body
            })
        }),
        sendMessage: build.mutation({
            query: ({ text, room }) => ({
                url: `/send/${room}`,
                method: 'POST',
                body: text
            })
        }),
        getAllMessagesRoom: build.query({
            query: ({room}) => ({
                url: `/messages/${room}`,
                method: 'GET'
            })
        }),
        getLastMessageRoom: build.query({
            query: ({room}) => ({
                url: `/last/${room}`,
                method: 'GET'
            })
        }),
        getCurrentRooms: build.query({
            query: () => ({
                url: `/rooms`,
                method: 'GET'
            })
        }),
        getOneRoom: build.query({
            query: ({room}) => ({
                url: `/room/${room}`,
                method: 'GET'
            })
        }),
        deleteRoom: build.mutation({
            query: (room) => ({
                url: `/delete/${room}`,
                method: 'DELETE'
            })
        })
    })
})