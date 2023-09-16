import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react/";
// import { Store } from "./Store.jsx";
import { PostAPI } from "./Redux/API.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={Store}> */}
    <ApiProvider api={PostAPI}>
      <App />
    </ApiProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
