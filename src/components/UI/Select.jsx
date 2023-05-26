import React from "react";

export default function Select({ label, name, onChange }) {
  return (
    <div>
      <div className="w-full md:w-auto pb-3">
        <label>{label}:</label>
        <select name={name} className="  " onChange={onChange}>
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
