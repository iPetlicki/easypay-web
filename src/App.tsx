import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import Layout from "./layouts/layout/Layout";
import CatalogPage from "./pages/catalog/CatalogPage";
import PaymentsPage from "./pages/payments/PaymentsPage";
import SwapPage from "./pages/swap/SwapPage";
import IntegrationsPage from "./pages/integrations/IntegrationsPage";
import AboutPage from "./pages/about/AboutPage";
import * as path from "./routing"

function App() {


  return (
      <Routes>
          <Route element={<Layout/>}>
              <Route path={path.homePath} element={<MainPage />}/>
              <Route path={path.catalogPath} element={<CatalogPage />}/>
              <Route path={path.paymentsPath} element={<PaymentsPage />}/>
              <Route path={path.swapPath} element={<SwapPage />}/>
              <Route path={path.integrationsPath} element={<IntegrationsPage />}/>
              <Route path={path.aboutPath} element={<AboutPage />}/>
          </Route>
      </Routes>
  );
}

export default App;
