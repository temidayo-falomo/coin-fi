import React from "react";
import "./CardBox.css";
import CardBoardHeader from "./cardBoxHeader/CardBoxHeader";
import CardBoxSubHeader from "./cardBoxSubHeader/CardBoxSubHeader";
import Cards from "./cards/Cards";

//Gets the Props from MainContainer.jsx
//Passes the props to Cards - Card

function CardBox(props) {
  return (
    <div className="CardBox">
      <CardBoardHeader />
      <CardBoxSubHeader />
      <Cards
        filteredCoins={props.filteredCoins}
        currencySymbol={props.currencySymbol}
        graphData={props.graphData}
      />
    </div>
  );
}

export default CardBox;
