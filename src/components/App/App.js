import React, { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  function onSearch(term) {
    Spotify.search(term).then((results) => {
      setSearchResults(results);
    });
  }
  function addTrack(track) {
    if (!playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  }
  function removeTrack(track) {
    setPlaylistTracks(
      playlistTracks.filter((savedTrack) => savedTrack.id !== track.id)
    );
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }
  function savePlaylist() {
    if (!playlistName || !playlistTracks.length) {
      alert("Nama playlist dan lagu tidak boleh kosong!");
      return;
    }

    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris)
      .then(() => {
        alert(
          `Menyimpan playlist "${playlistName}" dengan ${playlistTracks.length} lagu`
        );
        setPlaylistName("New Playlist");
        setPlaylistTracks([]);
      })
      .catch((error) => {
        alert("Terjadi kesalahan saat menyimpan playlist: " + error.message);
      });
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ritme Kita</h1>
      </header>
      <main>
        <SearchBar onSearch={onSearch} />
        <section className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
