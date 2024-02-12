// import React from 'react'

import { Route, Routes } from "react-router-dom"

// type Props = {}

const PrivtaeRoutes = () => {
  return (
    <Routes>
        <Route path="/*" element={<div>Welcome to the dashboard </div>} />
    </Routes>
  )
}

export default PrivtaeRoutes