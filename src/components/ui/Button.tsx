// src/components/ui/Button.tsx
'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const baseStyles = "px-4 py-2 rounded-lg font-semibold transition-colors w-full text-center";
  
  const variantStyles = {
    primary: "bg-yellow-500 text-black hover:bg-yellow-400",
    secondary: "bg-[#2a2a2e] text-white hover:bg-gray-700 border border-gray-700",
    ghost: "bg-transparent text-gray-300 hover:bg-[#2a2a2e]",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
