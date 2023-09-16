import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => "comments",
    }),
  }),
});

export const { useGetCommentsQuery } = commentsApi;
