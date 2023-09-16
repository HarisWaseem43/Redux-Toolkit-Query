import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PostAPI = createApi({
  reducerPath: "PostAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts",
    }),
  }),
});

export const { useGetPostsQuery } = PostAPI;
