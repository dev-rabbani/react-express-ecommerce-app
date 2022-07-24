import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import external css
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/dependency/font-awesome-v6/css/all.css";
//import app scss
import "./assets/scss/main.scss";

import { products } from './data/product'


import Provider from "./contexts/ProdcutContext";
import ThemeProvider from "./contexts/ThemeContext";

const themeData = {
  theme: 'dark'
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider value={products}>
    <ThemeProvider value={themeData} >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
