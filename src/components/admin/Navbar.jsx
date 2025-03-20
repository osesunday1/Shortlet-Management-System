import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { AppContext } from "../../context/AppContext";
import { useContext } from 'react';

const Navbar = () => {
    const { navigate } = useContext(AppContext);

    return (
      <nav className="navbar-container">
        {/* Logo */}
        <img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className='logo' />
        
        {/* Desktop Navigation */}
        <div className="nav-links">
            <button className='nav-button' onClick={() => navigate('/admin')}>Admin Board</button>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/about' className='nav-link'>About Us</Link>
        </div>
        
        {/* User Menu */}
        <div className="user-menu">
            <button className='user-button' onClick={() => navigate('/login')}>Login</button>
            <button className='user-button' onClick={() => navigate('/signup')}>Sign Up</button>
        </div>

        {/* Mobile Navigation */}
        <div className="mobile-nav">
            <button className='nav-button' onClick={() => navigate('/')}>Home</button>
            <Link to='/admin' className='nav-link'>Admin Board</Link>
            <Link to='/about' className='nav-link'>About Us</Link>

        </div>
      </nav>
    );
};

export default Navbar;

/* CSS Styling */
const styles = `
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background: #6a0dad;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #ddd;
}

.logo {
  width: 65px;
  cursor: pointer;
}

/* Increased font size & spacing for a cleaner look */
.nav-links {
  display: flex;
  align-items: center;
  gap: 50px;
  font-size: 20px;
  color: white;
}

.nav-link, .nav-button {
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s ease;
  padding: 5px 15px;
}

/* Hover effect: Slightly brighter text */
.nav-link:hover, .nav-button:hover {
  color: rgba(255, 255, 255, 0.85);
}

.user-menu {
  display: flex;
  gap: 20px;
}

.user-button {
  background: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  color: #6a0dad;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.user-button:hover {
  background: #f3e8ff;
}

.mobile-nav {
  display: none;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
