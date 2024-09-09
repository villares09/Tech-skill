import React from "react";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider } from "styled-components";
import { theme } from "./utility/theme";
import ReactDOM from "react-dom/client";

// 1. Crear una root
const root = (ReactDOM as any).createRoot(document.getElementById("root") as HTMLElement);

// 2. Llamar al método `render`
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
