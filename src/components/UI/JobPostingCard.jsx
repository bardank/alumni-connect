import React from "react";

export default function JobPostingCard({ jobRole, companyName, location }) {
  return (
    <div>
      <div className=" border  p-2  bg-white rounded-lg shadow-lg  w-[250px] h-[180px] text-center m-4 ">
        <h3 className="text-lg font-bold mb-2">{jobRole}</h3>
        <p className="text-gray-500 mb-2">Company:{companyName}</p>
        <p className="text-gray-500 mb-4">Location:{location}</p>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
          type=""
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
