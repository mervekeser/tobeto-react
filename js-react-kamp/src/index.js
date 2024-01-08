import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore()
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
