import React from "react";
import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

function Tracklist({ tracks, onAdd, onRemove, isRemoval }) {
  return (
    <div className={styles.Tracklist}>
      {tracks?.map((singleTrack) => (
        <Track
          key={singleTrack.id}
          track={singleTrack}
          onAdd={onAdd}
          onRemove={onRemove}
          isRemoval={isRemoval}
        />
      ))}
    </div>
  );
}

export default Tracklist;
