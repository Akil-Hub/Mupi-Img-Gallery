import React from 'react';

const Button = ({ title, className = '', onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg active:scale-95 text-sm bg-gray-200 ${className} `}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
