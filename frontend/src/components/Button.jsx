import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  className = '',
  isLoading = false,
  disabled = false,
  to = null,
  onClick = null,
  ...rest
}) => {
  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800',
  };
  
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };
  
  // Base classes
  const baseClasses = 'rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors';
  
  // Disabled classes
  const disabledClasses = 'opacity-50 cursor-not-allowed';
  
  // Combined classes
  const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${disabled || isLoading ? disabledClasses : ''}
    ${className}
  `;
  
  // If it's a link
  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...rest}>
        {children}
      </Link>
    );
  }
  
  // Regular button
  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...rest}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner size="small" />
          <span className="ml-2">{children}</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;