import React from "react";
import "./CardBoxHeader.css";

function CardBoardHeader() {
  return (
    <header className="header">
      <h3>Top 200 Currencies</h3>
      <ul>
        <a href="/">All</a>
        <li>Coins</li>
        <li>Tokens</li>
        <li>Popular</li>
      </ul>
    </header>
  );
}

export default CardBoardHeader;
