import React from "react";

export default function JobPostingCard({ jobRole, companyName, location ,onClick,onDelete}) {
  return (
    <div>
      <div className=" border  p-2  bg-white rounded-lg shadow-lg  w-[250px] h-[180px] text-center m-4 ">
        <h3 className="text-lg font-bold mb-2">{jobRole}</h3>
        <p className="text-gray-500 mb-2">Company:{companyName}</p>
        <p className="text-gray-500 mb-4">Location:{location}</p>
        <div className="flex gap-2 justify-between w-full">
          {
            onClick &&
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
          type=""
          onClick={onClick}
        >
          Edit Opportunity
        </button>
          }
        
        {
          onDelete &&
            <button
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800"
          type=""
          onClick={onDelete}
        >
          Delete Opportunity
        </button>
        }
        {
          onDelete && 
           <button
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800"
          type=""
          onClick={onDelete}
        >
        </button>
        }
      
       
      </div>
      </div>
    </div>
  );
}
