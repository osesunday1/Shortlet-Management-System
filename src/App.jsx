import { Route, Routes, useMatch } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home";
import Dashboard from './pages/admin/Dashboard';
import ViewBookings from "./pages/admin/ViewBookings";
import AddBooking from "./pages/admin/AddBooking";
import ViewGuest from "./pages/admin/ViewGuest";
import Unauthorized from "./components/auth/Unauthorized";
import Admin from './pages/admin/Admin';
import SignIn from './pages/admin/SignIn';
import Navbar from './components/admin/Navbar';
import ViewApartments from './pages/admin/ViewApartments'
import ViewProductsComp from './components/admin/ViewProductsComp';
import AddProductComp from './components/admin/AddProductComp';
import AddInventoryComp from './components/admin/AddInventoryComp';
import ViewInventoryComp from './components/admin/ViewInventoryComp';
import About from './pages/About';



function App() {
  
  const PrivateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('auth') === 'true';
    return isAuthenticated ? children : <Navigate to="/signin" />;
  };
  return (
    
    <div className='text-default min-h-screen bg-white'>
      <Navbar/>
     <Routes>
     <Route path='/' element={ <Home />} />
     <Route path='about' element={ <About />} />
     <Route path="/signin" element={<SignIn />} />
     {/*<Route path="/reservation" element={<Rr />} />*/}

     <Route path='/admin' element={ <Admin /> }>
            <Route index element={<Dashboard />} />
            <Route path='view-bookings' element={ <ViewBookings/>}/>
            <Route path='add-booking' element={ <AddBooking/>}/>
            <Route path='view-guests' element={ <ViewGuest/>}/>
            <Route path='view-apartments' element={ <ViewApartments/>}/>
            <Route path='view-inventory' element={ <ViewInventoryComp/>}/>
            <Route path='add-inventory' element={ <AddInventoryComp/>}/>
            <Route path='view-products' element={ <ViewProductsComp/>}/>
            <Route path='add-products' element={ <AddProductComp/>}/>
      </Route>

      <Route path='/unauthorized' element={<Unauthorized/>} />
     </Routes>
    </div>

  )
}

export default App
