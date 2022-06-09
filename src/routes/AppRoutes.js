import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Friend from '../containers/Friend'
import Home from '../containers/Home'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/" element={<Friend />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes