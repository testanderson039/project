import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ThemeProvider } from './utils/ThemeContext';

// Components
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import UnauthorizedPage from './pages/UnauthorizedPage';

// Styles
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Public Routes */}
              <Route index element={<HomePage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="unauthorized" element={<UnauthorizedPage />} />
              
              {/* Protected Customer Routes */}
              <Route element={<ProtectedRoute allowedRoles={['customer', 'vendor', 'admin', 'staff', 'delivery']} />}>
                {/* Add protected routes here */}
              </Route>
              
              {/* Protected Vendor Routes */}
              <Route element={<ProtectedRoute allowedRoles={['vendor', 'admin']} />}>
                {/* Add vendor routes here */}
              </Route>
              
              {/* Protected Admin Routes */}
              <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                {/* Add admin routes here */}
              </Route>
              
              {/* Not Found Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
