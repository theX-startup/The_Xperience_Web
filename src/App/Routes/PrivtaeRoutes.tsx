// import React from 'react'

import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Dashboard from "../pages/dashboard"

// type Props = {}

const PrivtaeRoutes = () => {
  const username = useSelector((state: any) => state.auth.user.fullname)
  return (
    <Routes>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route index element={<Dashboard />} />
        </Route>
    </Routes>
  )
}

export default PrivtaeRoutes