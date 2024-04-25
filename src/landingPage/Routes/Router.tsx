// import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/landingPage/Home";
import About from "../pages/landingPage/About";
import Resources from "../pages/landingPage/Resources";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AuthLayout from "./AuthLayout";
import Contact_Us from "../pages/landingPage/Contact_Us";
import Company_Pro from "../pages/landingPage/Company_Pro";

const Router = () => {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location}>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="resources" element={<Resources />} />
        <Route path="contact_us" element={<Contact_Us />} />
        <Route path="company_professional" element={<Company_Pro />} />
        <Route index element={<Home />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      {/* <Route path='/' element={<div>Welcome to the landing page</div>} /> */}
    </Routes>
  );
};

export default Router;
