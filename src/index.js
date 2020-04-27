import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  },
  typography: {
    fontFamily: ["dm", "Menlo", "Monaco", "'Courier New'", "monospace"].join()
  }
});

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.Fragment>,
  rootElement
);
