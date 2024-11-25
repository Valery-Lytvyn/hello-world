import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchButton: React.FC = () => {
  return (
    <button
      aria-label="Search"
      type="submit"
      className="rounded border p-1 text-xl text-gray-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white"
    >
      <IoSearch />
    </button>
  );
};

export default SearchButton;
