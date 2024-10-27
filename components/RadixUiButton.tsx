import React, { MouseEventHandler } from 'react';

interface RadixUiButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

/**
 * Custom button component that mimics Radix UI button functionality
 * with TypeScript type safety and standard HTML button implementation
 */
const RadixUiButton: React.FC<RadixUiButtonProps> = ({ 
  label, 
  onClick, 
  variant = 'primary', 
  size = 'medium' 
}) => {
  // Generate size-specific classes
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  // Generate variant-specific classes
  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white'
  };

  return (
    <button
      className={`
        rounded-md 
        font-medium 
        transition-colors 
        duration-200 
        ${sizeClasses[size]} 
        ${variantClasses[variant]}
      `}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
};

export default RadixUiButton;
