import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store, persistor } from "./app/store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import { PersistGate } from "redux-persist/lib/integration/react";
import { SettingsProvider } from "./context/SettingsContext.jsx";

import "./index.css";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <SettingsProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <App />
            <ToastContainer position="top-right" />
          </QueryClientProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </SettingsProvider>,
);
