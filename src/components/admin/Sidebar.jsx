import { AppContext } from "../../context/AppContext";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useContext } from "react";

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: assets.home_icon },
    { name: 'Add Booking', path: '/admin/add-booking', icon: assets.add_icon },
    { name: 'Bookings', path: '/admin/view-bookings', icon: assets.my_course_icon },
    { name: 'View Guest', path: '/admin/view-guests', icon: assets.person_tick_icon },
    { name: 'View Apartments', path: '/admin/view-apartments', icon: assets.person_tick_icon },
  ];

  return (
    <div className='md:w-64 w-16 border-r min-h-screen text-black border-gray-500 py-2 flex flex-col bg-white'>
      {menuItems.map((item) => (
        <NavLink 
          key={item.path} 
          to={item.path} 
          end={item.path === '/admin'}
          className={({ isActive }) => 
            `flex items-center md:flex-row flex-col md:justify-start justify-center py-3.5 md:px-10 gap-3 
            ${isActive ? 'bg-purple-300 border-r-4 border-purple-500 text-primary-100' 
            : 'hover:bg-purple-300 border-r-[6px] border-white hover:border-gray-100'}`
          }
        >
          <img src={item.icon} alt="" className="w-6 h-6" />
          <p className='md:block hidden text-center'>{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
