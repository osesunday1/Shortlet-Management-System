import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { AppContext } from "../../context/AppContext";
import { useContext } from 'react';

const Navbar = () => {
  const isAuthenticated = localStorage.getItem("auth") === "true";
  const { navigate } = useContext(AppContext);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/signin");
  };

  return (
    <div className="flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-300 py-4 bg-white shadow-sm">
      {/* Logo */}
      <img
        onClick={() => navigate('/')}
        src={assets.logo}
        alt="Logo"
        className="w-10 cursor-pointer"
      />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
        {isAuthenticated ? (
          <>
            <Link to="/admin" className="hover:text-blue-600 transition duration-200">
              Admin Board
            </Link>
            <button
              onClick={handleLogout}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/" className="hover:text-blue-600 transition duration-200">
              Home
            </Link>
            <Link to="about" className="hover:text-blue-600 transition duration-200">
              About
            </Link>
            <Link to="listings" className="hover:text-blue-600 transition duration-200">
              Listings
            </Link>
            <Link to="reservation" className="hover:text-blue-600 transition duration-200">
              Reservations
            </Link>
            <Link to="contact" className="hover:text-blue-600 transition duration-200">
              Contact
            </Link>
            <Link to="/signin">
              <button className="bg-primary-100 text-white px-5 py-2 rounded-lg font-semibold hover:bg-primary-200 cursor-pointer transition duration-300">
                Sign In
              </button>
            </Link>
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-3 text-sm text-gray-600">
        <button
          onClick={() => navigate('/')}
          className="hover:text-blue-600 transition duration-200"
        >
          Home
        </button>
        |
        <Link
          to="/admin"
          className="hover:text-blue-600 transition duration-200"
        >
          Admin Board
        </Link>
      </div>
    </div>
  );
};

export default Navbar;