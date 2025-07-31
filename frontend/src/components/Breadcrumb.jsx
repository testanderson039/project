import { Link } from 'react-router-dom';
import { FaChevronRight, FaHome } from 'react-icons/fa';

const Breadcrumb = ({ items = [], className = '' }) => {
  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <FaHome className="mr-2" />
            Home
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <FaChevronRight className="text-gray-400 mx-1" />
              {index === items.length - 1 || !item.path ? (
                <span className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;