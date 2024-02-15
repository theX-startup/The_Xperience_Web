// import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/landingPage/Home";
import About from "../pages/landingPage/About";
import Resources from "../pages/landingPage/Resources";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

const Router = () => {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location}>
      <Route element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="resources" element={<Resources />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route index element={<Home />} />
      </Route>
      {/* <Route path='/' element={<div>Welcome to the landing page</div>} /> */}
    </Routes>
  );
};

export default Router;
