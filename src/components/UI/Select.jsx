import React from "react";

export default function Select({ label, name, onChange, value }) {
  return (
<<<<<<< HEAD
    <div>
      <div className="w-full md:w-auto pb-3">
        <label className="mb-2">{label}:</label>
        <select
          name={name}
          className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={onChange}
        >
=======
    <div className="w-full">
      <div className="w-full md:w-auto pb-3 gap-2 flex flex-col">
        <label>{label}:</label>
        <select name={name} className="w-full p-2" onChange={onChange}>
>>>>>>> dev
          <option name={name} value="CSE">
            Computer Science & Engg (CSE)
          </option>
          <option name={name} value="ISE">
            Information Science & Engg (ISE)
          </option>
          <option name={name} value="ME">
            Mechanical Engg (ME)
          </option>
          <option name={name} value="ECE">
            Electronics & Communication Engg (ECE)
          </option>
          <option name={name} value="EEE">
            Electrical & Electronics Engineering (EEE)
          </option>
          <option name={name} value="CIVIL">
            Civil Engg (Civil)
          </option>
        </select>
      </div>
    </div>
  );
}
