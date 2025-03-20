import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import UserBookingDetails from './pages/UserBookingDetails';
import UserDetailsPage from './pages/UserDetailsPage';  // Make sure this import is correct
import Admin from './pages/admin/Admin';
import Dashboard from './pages/admin/Dashboard';
import ViewBookings from "./pages/admin/ViewBookings";
import AddBooking from "./pages/admin/AddBooking";
import ViewGuest from "./pages/admin/ViewGuest";
import ViewApartments from './pages/admin/ViewApartments';
import Unauthorized from "./components/auth/Unauthorized";
import Navbar from './components/admin/Navbar';
import AboutUs from "./pages/AboutUs";
import ApartmentDetails from './pages/ApartmentDetails';


function App() {
  return (
    <div className='text-default min-h-screen bg-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='/user-bookings' element={<UserBookingDetails />} />
        <Route path='/user-details' element={<UserDetailsPage />} />  {/* Make sure this is here */}
        
        <Route path='/admin' element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path='view-bookings' element={<ViewBookings />} />
          <Route path='add-booking' element={<AddBooking />} />
          <Route path='view-guests' element={<ViewGuest />} />
          <Route path='view-apartments' element={<ViewApartments />} />
        </Route>
        <Route path='/guest/:id' element={<ApartmentDetails />}></Route>

        <Route path='/unauthorized' element={<Unauthorized />} />
      </Routes>
    </div>
  );
}

export default App;
