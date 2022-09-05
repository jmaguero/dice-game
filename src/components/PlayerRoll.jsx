import React from "react";

export default function PlayerRoll({ rollScore, player }) {
  return (
    <div>
      <div>{player}</div>
      <div>{rollScore ? rollScore : "0"}</div>
    </div>
  );
}
