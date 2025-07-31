import { createContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDarkMode } from '../features/auth/authSlice';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  // Initialize dark mode from user preferences or system preference
  const [darkMode, setDarkModeState] = useState(() => {
    // Check if user has a preference
    if (user && user.preferences && user.preferences.darkMode !== undefined) {
      return user.preferences.darkMode;
    }
    
    // Check if system preference is dark
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }
    
    // Default to light mode
    return false;
  });
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkModeState(!darkMode);
    
    // Update user preferences if logged in
    if (user) {
      dispatch(setDarkMode(!darkMode));
    }
  };
  
  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};