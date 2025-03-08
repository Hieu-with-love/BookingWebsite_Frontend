import { useState } from 'react'
import './App.css'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/customer/Home/Home'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'

function App() {
  return (
    <Routes>
      {/* We can automatically navigate from / default to /customer */}
      <Route path='/' element={<Navigate to='/customer' replace />} />

      {/* Start auth routes */}
      <Route path='/signin' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      {/* End auth routes */}

      {/* Start all routes of Customer Role */}
      <Route path='/customer' element={<Home />} />

      {/* End all routes of Customer Role */}

    </Routes>
  )
}

export default App
