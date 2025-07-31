import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingCart, FaUser, FaSignOutAlt, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { logout } from '../features/auth/authSlice';
import { ThemeContext } from '../utils/ThemeContext';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            SuperShop
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              to="/shops"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Shops
            </Link>
            
            {/* Cart */}
            <Link
              to="/cart"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 relative"
            >
              <FaShoppingCart size={20} />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
            
            {/* Theme toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            
            {/* User menu */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <FaUser size={20} />
                  <span>{user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                  {/* Admin Dashboard */}
                  {user.role === 'admin' && (
                    <Link
                      to="/admin/dashboard"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  
                  {/* Vendor Dashboard */}
                  {user.role === 'vendor' && (
                    <Link
                      to="/vendor/dashboard"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Vendor Dashboard
                    </Link>
                  )}
                  
                  {/* Staff Dashboard */}
                  {user.role === 'staff' && (
                    <Link
                      to="/staff/dashboard"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Staff Dashboard
                    </Link>
                  )}
                  
                  {/* Delivery Dashboard */}
                  {user.role === 'delivery' && (
                    <Link
                      to="/delivery/dashboard"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Delivery Dashboard
                    </Link>
                  )}
                  
                  {/* Profile */}
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Profile
                  </Link>
                  
                  {/* Orders */}
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    My Orders
                  </Link>
                  
                  {/* Logout */}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <div className="flex items-center space-x-1">
                      <FaSignOutAlt size={16} />
                      <span>Logout</span>
                    </div>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Register
                </Link>
              </div>
            )}
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3">
            <Link
              to="/"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/shops"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={toggleMenu}
            >
              Shops
            </Link>
            <Link
              to="/cart"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={toggleMenu}
            >
              Cart ({items.length})
            </Link>
            
            {user ? (
              <>
                {/* Admin Dashboard */}
                {user.role === 'admin' && (
                  <Link
                    to="/admin/dashboard"
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={toggleMenu}
                  >
                    Admin Dashboard
                  </Link>
                )}
                
                {/* Vendor Dashboard */}
                {user.role === 'vendor' && (
                  <Link
                    to="/vendor/dashboard"
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={toggleMenu}
                  >
                    Vendor Dashboard
                  </Link>
                )}
                
                {/* Staff Dashboard */}
                {user.role === 'staff' && (
                  <Link
                    to="/staff/dashboard"
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={toggleMenu}
                  >
                    Staff Dashboard
                  </Link>
                )}
                
                {/* Delivery Dashboard */}
                {user.role === 'delivery' && (
                  <Link
                    to="/delivery/dashboard"
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={toggleMenu}
                  >
                    Delivery Dashboard
                  </Link>
                )}
                
                <Link
                  to="/profile"
                  className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  Profile
                </Link>
                <Link
                  to="/orders"
                  className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  My Orders
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  Register
                </Link>
              </>
            )}
            
            {/* Theme toggle */}
            <button
              onClick={() => {
                toggleDarkMode();
                toggleMenu();
              }}
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {darkMode ? (
                <>
                  <FaSun size={20} />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <FaMoon size={20} />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;