import React from "react";

export default function Select({ title }) {
  return (
    <div>
      <div className="w-full md:w-auto pb-3">
        <label>{title}:</label>
        <select className="  ">
          <option value="cse">Computer Science & Engg (CSE)</option>
          <option value="ise">Information Science & Engg (ISE)</option>
          <option value="">Mechanical Engg (ME)</option>
          <option value="ece">Electronics & Communication Engg (ECE)</option>
          <option value="eee">
            Electrical & Electronics Engineering (EEE)
          </option>
          <option value="civil">Civil Engg (Civil)</option>
        </select>
      </div>
    </div>
  );
}
