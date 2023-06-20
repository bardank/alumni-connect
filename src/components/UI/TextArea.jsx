import React, { useState } from "react";

export default function TextArea({
  label,
  value,
  placeholder,
  name,
  onChange,
}) {
  return (
    <div>
      <div className="w-full md:w-auto">
        <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
        {label}
        </label>
        <textarea
          name={name}
          rows="6"
          cols="40"
          value={value}
          className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder={placeholder}
          onChange={onChange}
        ></textarea>
      </div>
    </div>
  );
}
