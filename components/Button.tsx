import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', size = 'medium' }) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
