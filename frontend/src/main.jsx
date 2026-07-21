import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

import { HelmetProvider } from "react-helmet-async";

import { Toaster } from "react-hot-toast";

import App from "./App";

import "@/styles/globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <HelmetProvider>

      <QueryClientProvider client={queryClient}>

        <BrowserRouter>

          <App />

          <Toaster
            position="top-right"
            reverseOrder={false}
          />

        </BrowserRouter>

      </QueryClientProvider>

    </HelmetProvider>

  </React.StrictMode>
);