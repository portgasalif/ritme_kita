import React, { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  function onChangeSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (search.trim()) {
      onSearch(search);
    } else {
      alert("Please enter a song name.");
    }
    setSearch("");
  }
  return (
    <div className={styles.SearchBar}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search for a song..."
          value={search}
          onChange={onChangeSearch}
        />
        <button className={styles.button}>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
