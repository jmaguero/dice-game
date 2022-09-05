import React from "react";

function Scoreboard({ player, score }) {
  return (
    <div>
      <h4>Player {player ? player : "No player selected"}</h4>
      <p>{score ? score : "0"}</p>
    </div>
  );
}

export default Scoreboard;
