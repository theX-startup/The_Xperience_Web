// import React from 'react'

import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"

// type Props = {}

const PrivtaeRoutes = () => {
  const username = useSelector((state: any) => state.auth.user.fullname)
  return (
    <Routes>
        <Route path="/*" element={<div>Welcome to the dashboard, {username} </div>} />
    </Routes>
  )
}

export default PrivtaeRoutes