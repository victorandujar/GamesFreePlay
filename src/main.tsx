import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/poppins";
import "@fontsource/play";
import GlobalStyles from "./styles/GlobalStyles";
import "./styles/scss/styles.scss";
import GamesContextProvider from "./store/contexts/GamesContextProvider";
import { RouterProvider } from "react-router";
import { router } from "./router/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <GamesContextProvider>
      <RouterProvider router={router} />
    </GamesContextProvider>
  </React.StrictMode>
);
