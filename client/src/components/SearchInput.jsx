import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  return (
    <div className=" flex-1 h-10 relative">
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="w-full h-full px-4 border outline-none border-slate-300 rounded-full"
        type="text"
        placeholder="Search here..."
      />

      {search ? (
        <IoCloseOutline onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-xl hover:text-red-500 cursor-pointer duration-300" />
      ) : (
        <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-xl "/>
      )}
    </div>
  );
};

export default SearchInput;
