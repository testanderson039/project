import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className = '',
}) => {
  // If there's only 1 page, don't render pagination
  if (totalPages <= 1) return null;
  
  // Generate page numbers
  const generatePageNumbers = () => {
    const pageNumbers = [];
    
    // Always show first page
    pageNumbers.push(1);
    
    // Calculate range around current page
    const leftSibling = Math.max(2, currentPage - siblingCount);
    const rightSibling = Math.min(totalPages - 1, currentPage + siblingCount);
    
    // Add dots if needed
    if (leftSibling > 2) {
      pageNumbers.push('...');
    }
    
    // Add pages in range
    for (let i = leftSibling; i <= rightSibling; i++) {
      if (i !== 1 && i !== totalPages) {
        pageNumbers.push(i);
      }
    }
    
    // Add dots if needed
    if (rightSibling < totalPages - 1) {
      pageNumbers.push('...');
    }
    
    // Always show last page if more than 1 page
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };
  
  const pageNumbers = generatePageNumbers();
  
  return (
    <div className={`flex justify-center mt-6 ${className}`}>
      <nav className="flex items-center space-x-1">
        {/* Previous button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded-md ${
            currentPage === 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          <FaChevronLeft />
        </button>
        
        {/* Page numbers */}
        {pageNumbers.map((page, index) => (
          <button
            key={index}
            onClick={() => (page !== '...' ? onPageChange(page) : null)}
            disabled={page === '...'}
            className={`px-3 py-2 rounded-md ${
              page === currentPage
                ? 'bg-blue-600 text-white'
                : page === '...'
                ? 'text-gray-500 dark:text-gray-400 cursor-default'
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {page}
          </button>
        ))}
        
        {/* Next button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 rounded-md ${
            currentPage === totalPages
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          <FaChevronRight />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;