import { Link } from 'react-router-dom';
import { FaLock, FaHome } from 'react-icons/fa';

const UnauthorizedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <FaLock className="text-red-500 text-6xl mb-6" />
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Unauthorized Access
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 text-center max-w-md">
        You do not have permission to access this page. Please contact the administrator if you believe this is an error.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 flex items-center"
      >
        <FaHome className="mr-2" /> Go to Homepage
      </Link>
    </div>
  );
};

export default UnauthorizedPage;