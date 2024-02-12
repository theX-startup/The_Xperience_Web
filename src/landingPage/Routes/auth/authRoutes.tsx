// import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import AuthLayout from "./AuthLayout";

// type Props = {};

const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
