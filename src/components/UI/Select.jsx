import React from "react";

export default function Select({ label, name, onChange, value }) {
  return (
    <div className="w-full">
      <div className="w-full md:w-auto pb-3 gap-2 flex flex-col">
        <label>{label}:</label>
        <select name={name} className="w-full p-2" onChange={onChange}>
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
