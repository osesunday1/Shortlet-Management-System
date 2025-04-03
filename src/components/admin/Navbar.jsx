import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { FiPackage } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 bg-gradient-to-r from-[#63c419] via-[#7dd75f] to-[#c365fd] text-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section with Background */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 group cursor-pointer bg-white/20 p-2 rounded-lg backdrop-blur-md"
        >
          <img
            src={assets.logo}
            alt="Logo"
            className="w-14 h-14 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="text-3xl font-extrabold bg-clip-text text-transparent bg-white drop-shadow-lg">
            Land-BNB
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {/* Inventory Button */}
          <button
            onClick={() => navigate("/inventory")}
            className="flex items-center gap-2 relative text-white font-semibold text-lg hover:text-gray-200 px-3 py-2 transition-all duration-300 group"
          >
            <FiPackage className="text-xl" />
            Inventory
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>

          {["About", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => navigate(`/${item.toLowerCase()}`)}
              className="relative text-white font-semibold text-lg hover:text-gray-200 px-3 py-2 transition-all duration-300 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          {/* Update "Book Now" button to navigate to the Add Booking page */}
          <button
            onClick={() => navigate("/admin/add-booking")}
            className="px-4 py-2 text-white bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300"
          >
            Book Now
          </button>
          <button
            onClick={() => navigate("/admin")}
            className="px-4 py-2 text-white bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300"
          >
            Admin
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/auth")}
            className="hidden md:block px-5 py-2 text-white hover:text-gray-200 transition-all duration-300"
          >
            Login
          </button>
          <Link to="/auth">
            <button className="px-6 py-3 bg-white text-[#c365fd] font-bold rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-lg">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          {/* Add Inventory button for mobile */}
          <button
            onClick={() => navigate("/inventory")}
            className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300"
          >
            <FiPackage className="w-7 h-7 text-white" />
          </button>
          <button className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
