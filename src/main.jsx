import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import ContextComponent from "./providers/ContextComponent";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextComponent>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    </ContextComponent>
    <div><Toaster/></div>
  </React.StrictMode>
);
