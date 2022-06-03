import React from "react";
import Card from "../card/Card";
import "./Cards.css";

//Gets Props from CardBox.jsx

function Cards(props) {
  return (
    <div className="cards-container">
      {props.filteredCoins.map((coin, index) => {
        return (
          <Card
            key={coin.id}
            index={index}
            currencySymbol={props.currencySymbol}
            graphData={props.graphData}
            {...coin}
          />
        );
      })}
    </div>
    //Consider Using prevNumber * 2 for Pagination.
  );
}

export default Cards;
