import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./GlobalStyles";

import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    // background: "#ffffff",
    background: "#202020",
    // primary: "27.724137931034484, 62.23175965665235%, 54.31372549019608%",
    primary: "300, 100%, 25.098039215686274%",
    // primary: "#800080",
    // primary: "#29b0b6",
    // primary: "#9d0020",
    // primary: "#2221f7",
    // primary: "#d38542",
    // primary: "#d91349",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);
