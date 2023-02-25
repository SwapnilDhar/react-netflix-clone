import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ProtectedRoutes = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoutes;