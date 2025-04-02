import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-purple-300 text-black-800 py-8 px-4 shadow-inner">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-3">
              <img 
                className="w-8 h-8" 
                src={assets.logo} 
                alt="Land BNB logo" 
                loading="lazy"
              />
              <span className="ml-2 text-lg font-semibold">Land BNB</span>
            </div>
            <p className="text-gray-600 text-sm">
              Modern short-term rental management platform
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 text-gray-700">Product</h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'API', 'Integrations'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 text-gray-700">Resources</h4>
            <ul className="space-y-2">
              {['Blog', 'Support', 'Documentation', 'Community'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 text-gray-700">Connect</h4>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="bg-gray-200 hover:bg-gray-300 rounded-full p-3 transition-colors"
                  aria-label={`Follow us on ${platform}`}
                >
                  <img 
                    className="w-6 h-6" 
                    src={assets[`${platform}_icon`]} 
                    alt={`${platform} icon`} 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black-300 pt-6 flex flex-col md:flex-row justify-between items-center py-4">
          <p className="text-gray-500 text-sm mb-3 md:mb-0">
            © {new Date().getFullYear()} Land BNB. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Terms</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
