import store from "./redux/State";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

let root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        changeNewPost={store.changeNewPost.bind(store)}
        addMessage={store.addMessage.bind(store)}
        changeMessage={store.changeMessage.bind(store)}
      />
    </BrowserRouter>
  );
};
rerenderEntireTree(store.getState());
reportWebVitals();
store.subscribe(rerenderEntireTree);
