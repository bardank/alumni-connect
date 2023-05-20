import React from "react";

const Input = ({ label, type, placeholder, id, value, onChange, name }) => {
  return (
    <div className="mb-4 w-full flex">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
