// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../../pages/landingPage/Home";

// type Props = {};

const LandingPageRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default LandingPageRoutes;
