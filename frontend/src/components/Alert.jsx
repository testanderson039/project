import { useState } from 'react';
import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaTimes } from 'react-icons/fa';

const Alert = ({
  type = 'info',
  message,
  dismissible = true,
  onDismiss = () => {},
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss();
  };
  
  // Alert type styles
  const alertStyles = {
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };
  
  // Alert icons
  const alertIcons = {
    info: <FaInfoCircle className="text-blue-500 dark:text-blue-400" />,
    success: <FaCheckCircle className="text-green-500 dark:text-green-400" />,
    warning: <FaExclamationTriangle className="text-yellow-500 dark:text-yellow-400" />,
    error: <FaTimesCircle className="text-red-500 dark:text-red-400" />,
  };
  
  return (
    <div
      className={`flex items-center p-4 mb-4 rounded-md ${alertStyles[type]} ${className}`}
      role="alert"
    >
      <div className="mr-3">{alertIcons[type]}</div>
      <div className="flex-1">{message}</div>
      {dismissible && (
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8 hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={handleDismiss}
          aria-label="Close"
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default Alert;