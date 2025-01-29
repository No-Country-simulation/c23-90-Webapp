import React from "react";

const SearchBar = ({ placeholder, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder || "Search volunteering opportunities..."}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;