// Footer.jsx
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8 mt-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-2 text-lg">Land-BNB</h4>
            <p className="text-gray-400">
              Designed to make your shortlet management experience seamless and stress-free.
            </p>
          </div>
  
          <div>
            <h4 className="font-semibold mb-2 text-lg">Quick Links</h4>
            <ul className="text-gray-400 space-y-1">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/signin" className="hover:text-white">Login</Link></li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-semibold mb-2 text-lg">Contact</h4>
            <p className="text-gray-400">Email: support@landbnb.com</p>
            <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
            <p className="text-gray-400 mt-4">&copy; 2025 Land-BNB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;