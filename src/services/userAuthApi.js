import {
        createApi,
        fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

export const userAuthApi = createApi({
        reducerPath: 'userAuthApi',
        baseQuery: fetchBaseQuery({
                baseUrl: `http://127.0.0.1:8000/`
        }),
        endpoints: (builder) => ({
                registerUser: builder.mutation({
                        query: (user) => {
                                return {
                                        url: "accounts/register/",
                                        method: "POST",
                                        body: user,
                                        headers: {
                                                'Content-Type': 'application/json'
                                        },

                                }
                        }
                }),
                loginUser: builder.mutation({
                        query: (user) => {
                                return {
                                        url: "accounts/token/login/",
                                        method: "POST",
                                        body: user,
                                        headers: {
                                                'Content-Type': 'application/json'
                                        },

                                }
                        }
                }),
                getUser: builder.query({
                        query: (access_token) => {
                                return {
                                        url: "admin/accounts/user/",
                                        method: "GET",
                                        headers: {
                                                'authorization': `Bearer ${access_token}`
                                        },

                                }
                        }
                }),
        }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
        useRegisterUserMutation,
        useLoginUserMutation,
        useGetUserQuery
} = userAuthApi;