import React from "react";

const Search = () => {
  function handleSearch(term) {
    console.log(term);
  }
  return (
    <div className="w-full pt-4 pb-4 flex justify-center">
      {/* <label className="pr-3">Search</label> */}
      <input
        placeholder="serch item"
        className="p-2 pl-6 rounded-3xl w-80"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
