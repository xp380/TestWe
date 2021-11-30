import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "antd/dist/antd.css";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import MainPage from "./Container/MainPage";
import ApiReducer from "./redux/reducer";

const store = createStore(
  ApiReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
