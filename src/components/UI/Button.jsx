import React from "react";

const Button = ({ type, label, className }) => {
  return (
    <div>
      <button className={`bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 w-full h-12  rounded-3xl ${className}`}>
        <a href="registeration" target="_blank">
          {label}
        </a>
      </button>
    </div>
  );
};

export default Button;
