// import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthRoutes from "./auth/authRoutes";
import LandingPageRoutes from "./landingPage/LandingPageRoutes";

const Router = () => {
  const newUser = true;
  return (
    <Routes>
      {newUser ? (
        <>
          <Route path="landingPage/*" element={<LandingPageRoutes />} />
          <Route path="*" element={<Navigate to="/landingPage" />} />
        </>
      ) : (
        <>
          <Route path="auth/*" element={<AuthRoutes />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </>
      )}
      {/* <Route path='/' element={<div>Welcome to the landing page</div>} /> */}
    </Routes>
  );
};

export default Router;
