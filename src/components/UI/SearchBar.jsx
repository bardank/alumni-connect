import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="flex items-center gap-2 w-full md:w-1/3">
          <input
            className="px-2 py-1 w-full bg-gray-100 text-gray-800 placeholder-gray-500 rounded-md outline-none focus:ring-none"
            name="text"
            placeholder="Search..."
            type="search"
          />
          <AiOutlineSearch className="text-2xl" />
        </div>
      </div>
    </>
  );
};
export default SearchBar;
