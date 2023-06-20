import React from "react";

const Button = ({ type, label, className, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`bg-secondary  hover:bg-blue-700 text-white font-bold px-4 w-full py-4 rounded-3xl ${className}`}
      >
        <a>{label}</a>
      </button>
    </div>
  );
};

export default Button;
