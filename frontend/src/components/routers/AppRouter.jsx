import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/public/LoginPage";
import ProtectedRouter from "../common/ProtectedRouter";
import HomePage from "../../pages/public/HomePage/HomePage";
import ProtectedPage from "../../pages/private/ProtectedPage";
import RedirectIsSession from "../common/RedirectIsSession";
import ProductsPage from "../../pages/private/ProductsPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="login"
          element={
            <RedirectIsSession to="/">
              <LoginPage />
            </RedirectIsSession>
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<ProtectedRouter />}>
          <Route path="protected" element={<ProtectedPage />} />
          <Route path="products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
