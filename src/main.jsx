import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {MainProvider} from "./context/GlobalContext.jsx";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" exact element={<Dashboard />} />
      <Route path="/inventory" element={<Inventory />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  </React.StrictMode>
);
