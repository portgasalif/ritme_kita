import React from "react";
import styles from "./Track.module.css";

function Track({ track, onAdd, onRemove, isRemoval }) {
  function addTrack() {
    onAdd(track);
  }
  function removeTrack() {
    onRemove(track);
  }

  return (
    <div className={styles.Track}>
      <div className={styles.TrackInformation}>
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      <button
        className={styles.TrackAction}
        onClick={isRemoval ? removeTrack : addTrack}
      >
        {isRemoval ? "-" : "+"}
      </button>
    </div>
  );
}

export default Track;
