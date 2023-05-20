import React, { useState } from "react";

export default function TextArea({ label, suggestion }) {
  //   const handleOnChange = (e) => {
  //     console.log(e.target.value);
  //   };
  const [text, setText] = useState("enter your message");
  return (
    <div>
      <div className="w-full md:w-auto">
        <label>{label}</label>
        <textarea
          id="suggestion"
          name="suggestion"
          rows="6"
          cols="40"
          value={text}
          className="border w-full"
          placeholder={suggestion}
          //   onChange={(e) => onChange(e)}
        ></textarea>
      </div>
    </div>
  );
}
