import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ element, isLoggedin }) {
  return isLoggedin ? element : <Navigate to="/login" />;
}
