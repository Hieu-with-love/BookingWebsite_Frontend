import { useState } from 'react'
import './App.css'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/customer/Home/Home'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import RecoverPassword from './pages/customer/RecoverPassword/RecoverPassword'
import RoomsList from './pages/customer/RoomsList/RoomsList'

// Import all route to partner
import PartnerDashboard from './pages/partner/PartnerDashboard'
import AddRoom from './pages/partner/Manage-Rooms/AddRoom'
import AddHotel from './pages/partner/Manage-Hotels/AddHotel'
import ListHotel from './pages/partner/Manage-Hotels/ListHotel'
import ListDiscount from './pages/partner/Manage-Discount/ListDiscount'
import CreateDiscount from './pages/partner/Manage-Discount/CreateDiscount'
import EditDiscount from './pages/partner/Manage-Discount/EditDiscount'


function App() {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('user'))
  })

  const [token, setToken] = useState(() => {
    return localStorage.getItem('token')
  })

  const handleLogin = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", jwtToken);
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <Routes>
      {/* We can automatically navigate from / default to /customer */}
      <Route path='/' element={<Navigate to='/home' replace />} />

      {/* Start auth routes */}
      <Route path='/signin' element={<LoginPage onLogin={handleLogin} />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/recover-password' element={<RecoverPassword />} />
      {/* End auth routes */}

      {/* Start all routes of Customer Role */}
      <Route path='/home' 
        element={<Home 
          user={user}
          token={token}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />} 
      />
      <Route path='/rooms' element={<RoomsList />} />
      {/* End all routes of Customer Role */}

      {/* Start all routes of Partner Role */}
      <Route path='/partner' element={<PartnerDashboard />} />
      <Route path='/partner/list-hotel' element={<ListHotel />} />
      <Route path='/partner/add-hotel' element={<AddHotel />} />
      <Route path='/partner/add-room' element={<AddRoom />} />
      <Route path='/partner/list-discount' element={<ListDiscount />} />
      <Route path='/partner/create-discount' element={<CreateDiscount />} />
      <Route path='/partner/edit-discount/:id' element={<EditDiscount />} />
      {/* End all routes of Partner Role */}
    </Routes>
  )
}

export default App
