import React from "react";
import { IoLocation } from "react-icons/io5";
export default function JobPostingCard({
  jobRole,
  companyName,
  location,
  description,
  onClick,
  onDelete,
  onEdit,
  jobLink,
}) {
  return (
    <div className="flex items-center ">
      <div className=" border  p-3  bg-white rounded-lg shadow-lg flex flex-col   w-full min-h-[280px]  m-4 ">
        <h3 className="text-lg font-bold mb-2 text-center bg-secondary text-white w-full py-2">
          {jobRole}
        </h3>
        <p className="text-gray-500 mb-2 text-center font-medium">
          {companyName}
        </p>
        <div className="flex justify-center items-center mb-4">
          <IoLocation className="text-secondary text-2xl" />
          <p className="text-gray-500 ">{location}</p>
        </div>
        {description && (
          <p className="text-gray-500 mb-4">Description : {description}</p>
        )}
        <a href={jobLink} className="text-secondary" target="_blank">
          More info
        </a>
        <div className="flex gap-2 justify-between w-full">
          {onClick && (
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
              type=""
              onClick={onClick}
            >
              Edit Opportunity
            </button>
          )}

          {onDelete && (
            <button
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800"
              type=""
              onClick={onDelete}
            >
              Delete Opportunity
            </button>
          )}
          {onEdit && (
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
              type=""
              onClick={onEdit}
            >
              Edit Opportunity
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
