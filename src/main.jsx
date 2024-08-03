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
import Group from "./components/Inventory/Mgroup/Group.jsx";
import GroupDetails from "./components/Inventory/Mgroup/GroupDetails.jsx";
import ListOfMed from "./components/Inventory/ListOfMed.jsx";
import ReportPage from "./components/Reports/ReportPage.jsx";
import PaymentRepoPage from "./components/Reports/PaymentReportPage.jsx";
import SalesRepoPage from "./components/Reports/SalesReportPage.jsx";
import ConfigurationPage from "./components/Dashboard/ConfigurationPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" exact element={<Dashboard />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/inventory/medicine group" exact element={<Group />} />
      <Route
        path="/inventory/list of medicines"
        exact
        element={<ListOfMed />}
      />
      <Route
        path="/inventory/medicine-group/:id"
        exact
        element={<GroupDetails />}
      />
      <Route path="/report" exact element={<ReportPage />} />
      <Route path="/report/sales report" exact element={<SalesRepoPage />} />
      <Route
        path="/report/payments report"
        exact
        element={<PaymentRepoPage />}
      />
      <Route path="/configuration" exact element={<ConfigurationPage />} />

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
