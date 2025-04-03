import { Route, Routes, useMatch } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home";
import Dashboard from './pages/admin/Dashboard';
import ViewBookings from "./pages/admin/ViewBookings";
import AddBooking from "./pages/admin/AddBooking";
import ViewGuest from "./pages/admin/ViewGuest";
import Unauthorized from "./components/auth/Unauthorized";
import Admin from './pages/admin/Admin';
import Navbar from './components/admin/Navbar';
import ViewApartments from './pages/admin/ViewApartments'
import Footer from './components/admin/Footer';
import ApartmentDetail from './pages/user/ApartmentDetail';
import ApartmentListing from './pages/user/ApartmentListing';
import About from './pages/About';
import BookingSuccess from './pages/user/BookingSuccess';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import OurTeamPage from './pages/OurTeamPage';
import OurMissionPage from './pages/OurMissionPage';
import Contact from './pages/Contact';
import StartTrial from './pages/StartTrial';
import SmartBookings from './pages/SmartBookings';
import InventoryInsights from './pages/InventoryInsights';
import SecurePayments from './pages/securePayments';


function App() {
  return (
    <div className='text-default min-h-screen bg-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apartments' element={<ApartmentListing />} />
        <Route path='/apartments/:id' element={<ApartmentDetail />} />

        <Route path='/admin' element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path='view-bookings' element={<ViewBookings/>}/>
          <Route path='add-booking' element={<AddBooking/>}/>
          <Route path='view-guests' element={<ViewGuest/>}/>
          <Route path='view-apartments' element={<ViewApartments/>}/>
        </Route>

        <Route path='/booking-success' element={<BookingSuccess />} />

        <Route path="/about" element={<About/>} >
          <Route path='our-team' element={<OurTeamPage/>}></Route>
          <Route path='our-mission' element={<OurMissionPage/>}></Route>
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/start-trial" element={<StartTrial/>} />
        <Route path='/smart-bookings' element={<SmartBookings />} />
        <Route path='/inventory-insights' element={<InventoryInsights/>} />
        <Route path='/secure-payments' element={<SecurePayments/>} />
        <Route path='/unauthorized' element={<Unauthorized/>} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
