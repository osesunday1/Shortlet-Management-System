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
        <div className='sidebar-container'>
            {menuItems.map((item) => (
                <NavLink key={item.path} to={item.path} end={item.path === '/admin'}
                    className={({ isActive }) => 
                    `sidebar-item ${isActive ? 'active' : ''}`}
                >
                    <img src={item.icon} alt="" />
                    <p>{item.name}</p>
                </NavLink>
            ))}
        </div>
    );
};

export default Sidebar;

/* CSS Styling */
const styles = `
.sidebar-container {
  width: 260px;
  background: #f4f5fa;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: #333;
  font-weight: 600;
  background: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.03);
}

.sidebar-item:hover {
  background: #e2e6f3;
  color: #4a47a3;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

.sidebar-item.active {
  background: #4a47a3;
  color: white;
  box-shadow: 0px 3px 10px rgba(74, 71, 163, 0.3);
}

.sidebar-item img {
  width: 24px;
  height: 24px;
  filter: brightness(0) invert(0.5);
}

.sidebar-item.active img {
  filter: brightness(1);
}

@media (max-width: 768px) {
  .sidebar-container {
    width: 85px;
    padding: 15px;
    border-radius: 10px;
  }
  .sidebar-item p {
    display: none;
  }
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
