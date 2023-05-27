import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div>
          <input
            className="px-2 py-1 w-[400px] bg-gray-100 text-gray-800 placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="text"
            placeholder="Search..."
            type="search"
          />
        </div>

        <div className="flex justify-center w-10 h-10">
          <button>
            <img className="" src="./assests/icons/search.png" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
