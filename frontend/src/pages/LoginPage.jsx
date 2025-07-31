import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import { FaSignInAlt, FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  
  const { email, password } = formData;
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    
    if (isSuccess || user) {
      navigate('/');
    }
    
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    const userData = {
      email,
      password,
    };
    
    dispatch(login(userData));
  };
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center justify-center">
          <FaSignInAlt className="mr-2" /> Login
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Sign in to your SuperShop account
        </p>
      </div>
      
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 dark:text-gray-300 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 dark:text-gray-300 mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="text-right mt-2">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;