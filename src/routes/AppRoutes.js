import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../containers/Home'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes