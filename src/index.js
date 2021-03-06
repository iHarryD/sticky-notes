import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  EditingTodoProvider,
  ModalProvider,
  TodosProvider,
} from "./TodoContext";

ReactDOM.render(
  <React.StrictMode>
    <TodosProvider>
      <ModalProvider>
        <EditingTodoProvider>
          <BrowserRouter basename="sticky-notes">
            <App />
          </BrowserRouter>
        </EditingTodoProvider>
      </ModalProvider>
    </TodosProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
