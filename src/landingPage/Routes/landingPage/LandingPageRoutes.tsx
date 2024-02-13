// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../../pages/landingPage/Home";
import About from "../../pages/landingPage/About";
import Resources from "../../pages/landingPage/Resources";
import Register from "../../pages/Auth/Register";
import Login from "../../pages/Auth/Login";

// type Props = {};

const LandingPageRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="rosources" element={<Resources />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default LandingPageRoutes;
