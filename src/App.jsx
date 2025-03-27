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

function App() {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('user'))
  })

  const [jwt, setJwt] = useState(() => {
    return localStorage.getItem('jwt')
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
          jwt={jwt}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />} 
      />
      <Route path='/rooms' element={<RoomsList />} />

      {/* End all routes of Customer Role */}

      <Route path='/partner' element={<PartnerDashboard />} />
      <Route path='/partner/list-hotel' element={<ListHotel />} />
      <Route path='/partner/add-hotel' element={<AddHotel />} />
      <Route path='/partner/add-room' element={<AddRoom />} />
 
    </Routes>
  )
}

export default App
