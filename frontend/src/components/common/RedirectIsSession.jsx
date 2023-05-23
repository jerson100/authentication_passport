import React from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

const RedirectIsSession = ({ children, to = "/" }) => {
  const { isAuthenticated } = useAuthContext();
  //   console.log(isAuthenticated, us);
  if (isAuthenticated) return <Navigate to={to} />;
  return <>{children}</>;
};

export default RedirectIsSession;
