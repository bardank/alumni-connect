import React from "react";

const Input = ({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  name,
  required = true,
}) => {
  return (
    <div className="mb-4 w-full ">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
