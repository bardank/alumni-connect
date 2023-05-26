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
        <label>{label}</label>
        <textarea
          name={name}
          rows="6"
          cols="40"
          value={value}
          className="border w-full"
          placeholder={placeholder}
          onChange={onChange}
        ></textarea>
      </div>
    </div>
  );
}
