import React from "react";

export default function Select({ title }) {
  return (
    <div>
      <div className="w-full md:w-auto pb-3">
        <label>{title}:</label>
        <select className="  ">
          <option value="CSE">Computer Science & Engg (CSE)</option>
          <option value="ISE">Information Science & Engg (ISE)</option>
          <option value="ME">Mechanical Engg (ME)</option>
          <option value="ECE">Electronics & Communication Engg (ECE)</option>
          <option value="EEE">
            Electrical & Electronics Engineering (EEE)
          </option>
          <option value="CIVIL">Civil Engg (Civil)</option>
        </select>
      </div>
    </div>
  );
}
