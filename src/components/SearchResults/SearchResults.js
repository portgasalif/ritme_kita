import React from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults({ searchResults, onAdd }) {
  return (
    <div className={styles.SearchResults}>
      <h2>Results</h2>
      <Tracklist
        tracks={searchResults}
        onAdd={onAdd}
        isRemoval={false}
        onRemove={() => {}}
      />
    </div>
  );
}

export default SearchResults;
