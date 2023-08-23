import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),

  endpoints: (builder) => ({

    dummyRequest: builder.query<unknown,string>({
        query: ()=> "/dummy"
    })

    // Example for sending multiple type requests in RTK queries

    // getAllUsers: builder.query<unknown, void>({
    //   query: () => "/get-users",
    // }),

    // getOneUser: builder.query({
    //   query: (body) => ({
    //     url: "/find-user",
    //     method: "POST",
    //     body,
    //   }),
    // }),

    // updateUser: builder.mutation({
    //   query: (body) => ({
    //     url: "/update-user",
    //     method: "PUT",
    //     body,
    //   }),
    // }),

    // addUser: builder.mutation({
    //   query: (body) => ({
    //     url: "/add-user",
    //     method: "POST",
    //     body,
    //   }),
    // }),

    // deleteUser: builder.mutation({
    //   query: (name) => ({
    //     url: `/delete-user/${name}`,
    //     method: "DELETE",
    //   }),
    // }),
    
  }),
});

export const {
  useDummyRequestQuery
} = Api;
