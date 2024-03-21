import React from "react";
import { Navigate } from "react-router-dom";
function PrivateRoute({ children }) {
  console.log("")
  return localStorage.getItem("imperials") ? (
    children
  ) : (
    <Navigate to="/imperialAdmin/login" />
  );
}

export default PrivateRoute;
