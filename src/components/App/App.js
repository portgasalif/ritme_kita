import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  function onSearch(searchingResult) {
    console.log("Mencari:", searchingResult);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ritme Kita</h1>
      </header>
      <main>
        <SearchBar onSearch={onSearch} />
      </main>
    </div>
  );
}

export default App;
