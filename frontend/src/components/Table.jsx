import { useState } from 'react';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

const Table = ({
  columns,
  data,
  onRowClick = null,
  sortable = true,
  className = '',
}) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'asc',
  });
  
  // Handle sorting
  const handleSort = (key) => {
    if (!sortable) return;
    
    let direction = 'asc';
    
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    
    setSortConfig({ key, direction });
  };
  
  // Sort data
  const sortedData = () => {
    if (!sortConfig.key) return data;
    
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      
      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;
      
      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };
  
  // Get sort icon
  const getSortIcon = (key) => {
    if (!sortable) return null;
    
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />;
    }
    return <FaSort className="opacity-30" />;
  };
  
  return (
    <div className="overflow-x-auto">
      <table className={`min-w-full divide-y divide-gray-200 dark:divide-gray-700 ${className}`}>
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider ${
                  sortable ? 'cursor-pointer select-none' : ''
                }`}
                onClick={() => handleSort(column.key)}
              >
                <div className="flex items-center space-x-1">
                  <span>{column.label}</span>
                  {getSortIcon(column.key)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
          {sortedData().map((row, rowIndex) => (
            <tr
              key={row.id || rowIndex}
              className={`${
                onRowClick ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800' : ''
              }`}
              onClick={() => onRowClick && onRowClick(row)}
            >
              {columns.map((column) => (
                <td
                  key={`${row.id || rowIndex}-${column.key}`}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300"
                >
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      {data.length === 0 && (
        <div className="text-center py-10 bg-white dark:bg-gray-900">
          <p className="text-gray-500 dark:text-gray-400">No data available</p>
        </div>
      )}
    </div>
  );
};

export default Table;