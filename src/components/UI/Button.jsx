import React from "react";

const Button = ({ type, label }) => {
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white w-1/2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type={type}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
