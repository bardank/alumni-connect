import React from "react";

const Button = ({ type, label }) => {
  return (
    <div>
      <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 w-56 h-12 m-10 rounded-3xl">
        <a href="registeration" target="_blank">
          {label}
        </a>
      </button>
    </div>
  );
};

export default Button;
