import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <FaExclamationTriangle className="text-yellow-500 text-6xl mb-6" />
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
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

export default NotFoundPage;