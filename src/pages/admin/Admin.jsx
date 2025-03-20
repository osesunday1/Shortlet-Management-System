import { Outlet } from 'react-router-dom'
import Navbar from '../../components/admin/Navbar';
import Sidebar from '../../components/admin/Sidebar';
import Footer from '../../components/admin/Footer';


const Admin = () => {
  return (
    <div className='text-default min-h-screen bg-primary'>
      <div className='flex'>
        <Sidebar />
        <div className='flex-1'>
          <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Admin;