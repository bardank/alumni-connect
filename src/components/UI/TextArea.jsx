import React, { useState } from "react";

export default function TextArea({ label, value, suggestion, name }) {
  return (
    <div>
      <div className="w-full md:w-auto">
        <label>{label}</label>
        <textarea
          name={suggestion}
          rows="6"
          cols="40"
          value={value}
          className="border w-full"
          placeholder={suggestion}
          onChange={(e) => onChange(e)}
        ></textarea>
      </div>
    </div>
  );
}
