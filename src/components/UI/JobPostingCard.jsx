import React from "react";

export default function JobPostingCard({
  jobRole,
  companyName,
  location,
  description,
  onClick,
  onDelete,
  onEdit,
}) {
  return (
    <div className="flex items-center justify-center">
      <div className=" border  p-3  bg-white rounded-lg shadow-lg flex flex-col justify-center items-center  w-full min-h-[280px]  m-4 ">
        <h3 className="text-lg font-bold mb-2">{jobRole}</h3>
        <p className="text-gray-500 mb-2">Company:{companyName}</p>
        <p className="text-gray-500 mb-4">Location:{location}</p>
        {description && <p className="text-gray-500 mb-4">{description}</p>}
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
