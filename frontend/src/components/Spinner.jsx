const Spinner = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-6 w-6 border-2',
    medium: 'h-12 w-12 border-4',
    large: 'h-16 w-16 border-4',
  };
  
  return (
    <div className="flex justify-center items-center">
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-t-transparent border-blue-600 dark:border-blue-400`}
      ></div>
    </div>
  );
};

export default Spinner;