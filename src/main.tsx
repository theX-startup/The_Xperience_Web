import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { AuthProvider } from "./redux/context.tsx";
import AppRouter from "./AppRouter.tsx";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={Client}>
        <AuthProvider>
          <AppRouter />
          <ToastContainer />
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
