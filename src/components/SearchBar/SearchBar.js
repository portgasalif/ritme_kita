import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  function onChangeSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (search.trim()) {
      onSearch(search);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a song..."
        value={search}
        onChange={onChangeSearch}
      />
      <button onClick={handleSubmit}>Search</button>
    </form>
  );
}

export default SearchBar;
