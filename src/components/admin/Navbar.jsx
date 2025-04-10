import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { AppContext } from "../../context/AppContext";
import { useContext, useState } from 'react';
import { GiToggles } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  const isAuthenticated = localStorage.getItem("auth") === "true";
  const { navigate } = useContext(AppContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/signin");
  };

  return (
    <nav className="border-b border-gray-300 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 py-4">
        {/* Logo */}
        <img
          src={assets.logo}
          alt="Logo"
          className="w-10 cursor-pointer"
        />

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <RxHamburgerMenu />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
          {isAuthenticated ? (
            <>
              <Link to="/admin" className="hover:text-blue-600 transition duration-200">
                Admin Board
              </Link>
              <button
                onClick={handleLogout}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/" className="hover:text-blue-600 transition duration-200">
                Home
              </Link>
              <Link to="/about" className="hover:text-blue-600 transition duration-200">
                About
              </Link>
              <Link to="/listings" className="hover:text-blue-600 transition duration-200">
                Listings
              </Link>
              <Link to="/reservation" className="hover:text-blue-600 transition duration-200">
                Reservations
              </Link>
              <Link to="/contact" className="hover:text-blue-600 transition duration-200">
                Contact
              </Link>
              <Link to="/signin">
                <button className="bg-primary-100 text-white px-5 py-2 rounded-lg font-semibold hover:bg-primary-200 transition duration-300">
                  Sign In
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-600 font-medium">
          {isAuthenticated ? (
            <>
              <Link to="/admin" className="block hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
                Admin Board
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/" className="block hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="block hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/listings" className="block hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
                Listings
              </Link>
              <Link to="/reservation" className="block hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
                Reservations
              </Link>
              <Link to="/contact" className="block hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              <Link to="/signin">
                <button
                  className="w-full bg-primary-100 text-white px-4 py-2 rounded-lg hover:bg-primary-200 transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;