import { useState } from 'react'
import './App.css'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/customer/Home/Home'

function App() {
  return (
    <Routes>
      {/* We can automatically navigate from / default to /customer */}
      <Route path='/' element={<Navigate to='/customer' replace />} />

      {/* Start all routes of Customer Role */}
      <Route path='/customer' element={<Home />} />

      {/* End all routes of Customer Role */}

    </Routes>
  )
}

export default App
