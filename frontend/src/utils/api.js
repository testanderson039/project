import axios from 'axios';
import { showErrorToast } from './toast';

// Create an axios instance
const api = axios.create({
  baseURL: 'http://localhost:12000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem('token');
    
    // If token exists, add to headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      'Something went wrong';
    
    // Show error toast
    showErrorToast(message);
    
    // Handle unauthorized errors (401)
    if (error.response && error.response.status === 401) {
      // Clear localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      
      // Redirect to login page if not already there
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;