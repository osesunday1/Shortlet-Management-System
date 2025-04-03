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
import StartTrial from './pages/startTrialPage';
import SmartBookingsPage from './pages/smartBookings';
import AIAnalyticsPage from './pages/aiAnalytics';
import SecurePaymentsPage from './pages/securePayments';
import About from './pages/About';
import Contact from './pages/Contact';
import BookingSuccess from './pages/user/BookingSuccess';
import InventoryItems from './pages/inventory/InventoryItems';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OurTeamPage from './pages/OurTeamPage';
import OurMissionPage from './pages/OurMissionPage';

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

        <Route path="/about" element={<About/>} >
          <Route path='our-team' element={<OurTeamPage/>}></Route>
          <Route path='our-mission' element={<OurMissionPage/>}></Route>
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/start-trial" element={<StartTrial/>} />
        <Route path='/smart-bookings' element={<SmartBookingsPage/>} />
        <Route path='/ai-analytics' element={<AIAnalyticsPage/>} />
        <Route path='/secure-payments' element={<SecurePaymentsPage/>} />
        <Route path='/booking-success' element={<BookingSuccess />} />
        <Route path='/inventory' element={<InventoryItems />} />
        <Route path='/unauthorized' element={<Unauthorized/>} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
