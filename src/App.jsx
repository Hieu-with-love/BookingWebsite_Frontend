import { useState } from 'react'
import './App.css'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/customer/Home/Home'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import RecoverPassword from './pages/customer/RecoverPassword/RecoverPassword'
import AdminDashboard from './pages/admin/AdminDashboard'
import RoomsList from './pages/customer/RoomsList/RoomsList'
import AdminDashboardBooking from './pages/admin/AdminDashboardBooking'
import AdminOrder from './pages/admin/AdminOrder'
import AdminOrderDetail from './pages/admin/AdminOrderDetail'
import AdminReviews from './pages/admin/AdminReviews'
import AdminSetting from './pages/admin/AdminSetting'
import AdminPayment from './pages/admin/AdminPayment'
import AdminWishList from './pages/admin/AdminWishList'

function App() {
  return (
    <Routes>
      {/* We can automatically navigate from / default to /customer */}
      <Route path='/' element={<Navigate to='/home' replace />} />

      {/* Start auth routes */}
      <Route path='/signin' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/recover-password' element={<RecoverPassword />} />
      {/* End auth routes */}

      {/* Start all routes of Customer Role */}
      <Route path='/home' element={<Home />} />
      <Route path='/rooms' element={<RoomsList />} />

      {/* End all routes of Customer Role */}

      <Route path='/admin' element={<AdminDashboard />} />
      <Route path='/admin/booking' element={<AdminDashboardBooking />} />
      <Route path='/admin/orders' element={<AdminOrder />} />
      <Route path='/admin/orders/:id' element={<AdminOrderDetail />} />
      <Route path='/admin/reviews' element={<AdminReviews />} />
      <Route path='/admin/setting' element={<AdminSetting />} />
      <Route path='/admin/payments' element={<AdminPayment />} />
      <Route path='/admin/wishlist' element={<AdminWishList />} />

    </Routes>
  )
}

export default App
