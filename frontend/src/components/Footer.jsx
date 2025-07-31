import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-10 pb-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About SuperShop</h3>
            <p className="mb-4">
              The ultimate multi-vendor supermarket platform connecting local shops with customers.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shops"
                  className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Shops
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/faq"
                  className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping-policy"
                  className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/return-policy"
                  className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Vendor */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Become a Vendor</h3>
            <p className="mb-4">
              Join our platform and start selling your products to thousands of customers.
            </p>
            <Link
              to="/vendor/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Register as Vendor
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-5">
          <p className="text-center text-gray-500">
            &copy; {currentYear} SuperShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;