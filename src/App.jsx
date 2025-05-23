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
import ListHotel from './pages/partner/Manage-Hotels/ListHotel'
import ListDiscount from './pages/partner/Manage-Discount/ListDiscount'
import CreateDiscount from './pages/partner/Manage-Discount/CreateDiscount'
import EditDiscount from './pages/partner/Manage-Discount/EditDiscount'
import CreateHotel from './pages/partner/Manage-Hotels/CreateHotel'
import EditHotel from './pages/partner/Manage-Hotels/EditHotel'
import ListRoom from './pages/partner/Manage-Rooms/ListRoom'
import CreateRoom from './pages/partner/Manage-Rooms/CreateRoom'
import EditRoom from './pages/partner/Manage-Rooms/EditRoom'
import FilterdHotelList from './pages/customer/Home/FilterdHotelList'
import DetailsHotel from './pages/customer/Home/DetailsHotel'
import DetailsRoom from './pages/customer/RoomsList/DetailsRoom'
import FilteredRoomList from './pages/customer/RoomsList/FilteredRoomList'
import BookingDetail from './pages/customer/Home/BookingDetail'
import BookingConfirmation from './pages/customer/Home/BookingConfirmation'


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

      {/* Route for Manage Hotel */}
      <Route path='/partner/list-hotel' element={<ListHotel />} />
      <Route path='/partner/create-hotel' element={<CreateHotel />} />
      <Route path='partner/update-hotel/:id' element={<EditHotel />} />

      {/* Route for Manage Room */}
      <Route path='/partner/list-room' element={<ListRoom />} />
      <Route path='/partner/create-room' element={<CreateRoom />} />
      <Route path='/partner/update-room/:id' element={<EditRoom />} />
      
      {/* End route for Manage Room */}

      {/* Route for Manage Discount */}
      <Route path='/partner/list-discount' element={<ListDiscount />} />
      <Route path='/partner/create-discount' element={<CreateDiscount />} />
      <Route path='/partner/update-discount/:id' element={<EditDiscount />} />
      {/* End all routes of Partner Role */}



      {/* Route for customer */}
      <Route path='/list-hotel' element={<FilterdHotelList />} />
      <Route path='/list-room' element={<FilteredRoomList />} />
      <Route path='/list-hotel/hotel/:id' element={<DetailsHotel />} />
      <Route path='/list-room/room/:id' element={<DetailsRoom />} />
      <Route path="/booking-detail" element={<BookingDetail />} />
      <Route path='/booking-confirmation' element={<BookingConfirmation />} />
      {/* End route for customer */}
    </Routes>
  )
}

export default App
