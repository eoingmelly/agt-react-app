import React, { useState, useEffect } from "react";
import players from "../data";
import { Link, useParams } from "react-router-dom";
const Player = () => {
  const [name, setName] = useState("default name");
  const { id } = useParams();

  useEffect(() => {
    const newPlayer = players.find((player) => player.id === parseInt(id));
    //only set name if the playerExists
    newPlayer && setName(newPlayer.displayName);
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <Link to="/players" className="btn">
        Back To Players
      </Link>
    </div>
  );
};

export default Player;
