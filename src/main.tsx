import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/poppins";
import GlobalStyles from "./styles/GlobalStyles";
import "./styles/scss/styles.scss";
import GamesContextProvider from "./store/contexts/GamesContextProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <GamesContextProvider>
      <App />
    </GamesContextProvider>
  </React.StrictMode>
);
