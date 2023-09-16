import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./Redux/PostsAPI";
import { commentsApi } from "./Redux/CommentsAPI";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware, commentsApi.middleware),
});
