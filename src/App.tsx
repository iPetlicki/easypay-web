import React from 'react';
import {Route, Routes} from "react-router-dom";
import * as path from "./routing"
import MainPage from "./pages/mainPage/MainPage";
import Layout from "./layouts/layout/Layout";
import CatalogPage from "./pages/catalog/CatalogPage";
import PaymentsPage from "./pages/payments/PaymentsPage";
import SwapPage from "./pages/swap/SwapPage";
import IntegrationsPage from "./pages/integrations/IntegrationsPage";
import AboutPage from "./pages/about/AboutPage";
import CategoryPanel from "./components/panels/catalog-panel/category-panel/CategoryPanel";
import CatalogPanel from "./components/panels/catalog-panel/CatalogPanel";
import ItemPanel from "./components/panels/catalog-panel/category-panel/item-panel/ItemPanel";

function App() {

  return (
      <Routes>
          <Route element={<Layout/>}>
              <Route path={path.homePath} element={<MainPage />}/>
              <Route path={path.catalogPath} element={<CatalogPage/>}>
                  <Route index element={<CatalogPanel/>}/>
                  <Route path={`:${path.categoryName}`} element={<CategoryPanel/>}/>
                  <Route path={`:${path.categoryName}/:${path.itemId}`} element={<ItemPanel/>}/>
              </Route>
              <Route path={path.paymentsPath} element={<PaymentsPage />}/>
              <Route path={path.swapPath} element={<SwapPage />}/>
              <Route path={path.integrationsPath} element={<IntegrationsPage />}/>
              <Route path={path.aboutPath} element={<AboutPage />}/>
          </Route>
      </Routes>
  );
}

export default App;
