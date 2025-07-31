import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const FormInput = ({
  label,
  type = 'text',
  id,
  name,
  value,
  onChange,
  placeholder = '',
  required = false,
  disabled = false,
  error = '',
  className = '',
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  // Determine input type for password fields
  const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;
  
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-gray-700 dark:text-gray-300 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {type === 'textarea' ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
            } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
            {...rest}
          />
        ) : (
          <input
            type={inputType}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
            } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
            {...rest}
          />
        )}
        
        {type === 'password' && (
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
      
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormInput;