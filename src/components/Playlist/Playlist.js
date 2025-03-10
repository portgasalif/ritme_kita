import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

function Playlist({
  playlistName,
  playlistTracks,
  onRemove,
  onNameChange,
  onSave,
}) {
  function handleNameChange(event) {
    onNameChange(event.target.value);
  }

  return (
    <div className={styles.Playlist}>
      <input
        className={styles.PlaylistInput}
        value={playlistName}
        onChange={handleNameChange}
        placeholder="Masukan nama playlist"
        aria-label="Nama Playlist"
      />
      <Tracklist
        tracks={playlistTracks}
        onRemove={onRemove}
        isRemoval={true}
        onAdd={() => {}}
      />
      <button
        className={styles.PlaylistButton}
        type="button"
        onClick={onSave}
        disabled={!playlistTracks.length || !playlistName.trim()}
      >
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;
