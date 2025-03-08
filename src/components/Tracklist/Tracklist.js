import React from "react";
import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

function Tracklist({ tracks, onAdd, onRemove, isRemoval }) {
  const tracksList = [
    {
      id: 1,
      name: "Bohemian Rhapsody",
      artist: "Queen",
      album: "A Night at the Opera",
    },
    {
      id: 2,
      name: "Billie Jean",
      artist: "Michael Jackson",
      album: "Thriller",
    },
    {
      id: 3,
      name: "Hotel California",
      artist: "Eagles",
      album: "Hotel California",
    },
    {
      id: 4,
      name: "Smells Like Teen Spirit",
      artist: "Nirvana",
      album: "Nevermind",
    },
    {
      id: 5,
      name: "Sweet Child O' Mine",
      artist: "Guns N' Roses",
      album: "Appetite for Destruction",
    },
    {
      id: 6,
      name: "Wonderwall",
      artist: "Oasis",
      album: "(What's the Story) Morning Glory?",
    },
    { id: 7, name: "Yesterday", artist: "The Beatles", album: "Help!" },
    {
      id: 8,
      name: "Stairway to Heaven",
      artist: "Led Zeppelin",
      album: "Led Zeppelin IV",
    },
    {
      id: 9,
      name: "Like a Rolling Stone",
      artist: "Bob Dylan",
      album: "Highway 61 Revisited",
    },
    { id: 10, name: "Purple Rain", artist: "Prince", album: "Purple Rain" },
  ];
  return (
    <div className={styles.Tracklist}>
      {tracksList.map((singleTrack) => (
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
