import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../containers/Home'
import Profiles from '../containers/Profiles'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profiles" element={<Profiles />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes