import { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = ({
  placeholder = 'Search...',
  onSearch,
  className = '',
  initialValue = '',
}) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  
  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };
  
  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        {searchTerm && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 right-10 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FaTimes />
          </button>
        )}
        <button
          type="submit"
          className="absolute inset-y-0 right-0 px-3 flex items-center bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;