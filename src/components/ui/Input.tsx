// src/components/ui/Input.tsx
'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ icon, ...props }) => {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        className={`w-full bg-[#2a2a2e] border border-gray-700 rounded-lg py-3 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${icon ? 'pl-10' : 'pl-4'}`}
        {...props}
      />
    </div>
  );
};

export default Input; // <-- This line is most likely what's missing.