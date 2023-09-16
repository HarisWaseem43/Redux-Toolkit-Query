import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react/";
import { store } from "./store.jsx";
import { postsApi } from "./Redux/API.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={postsApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
