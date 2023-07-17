import React from "react";
import { Navigate } from "react-router-dom";

const index = ({ children }) => {
  const creds = localStorage.getItem("creds");
  return creds ? children : <Navigate to="/login" />;
};

export default index;
