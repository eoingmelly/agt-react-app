import React, { useState } from "react";
import { players as playersData } from "../data";

const Players = () => {
  const [players] = useState(playersData);

  return (
    <div>
      <h1>Players</h1>
      {players.map((plr) => {
        const { id, displayName, handicap, image } = plr;
        return (
          <article key={id} className="player">
            <img src={image} alt={displayName} />
            <h4>{displayName}</h4>
            <p>{handicap}</p>
            <button onClick={() => alert(`${displayName} is a solid choice`)}>
              Choose
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default Players;
