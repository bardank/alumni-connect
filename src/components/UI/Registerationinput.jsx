import React from "react";

const RegisterationInput = ({
  label,
  id,
  name,
  placeholder,
  type,
  value,
  onChange,
}) => {
  return (
    <div>
      <div className="w-full md:w-auto pb-3 min-w-200">
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e)}
        />
      </div>
    </div>
  );
};

export default RegisterationInput;
