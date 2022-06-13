import React from "react";
import "./Card.css";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
import { FiStar } from "react-icons/fi";
import { AiFillWarning } from "react-icons/ai";
import { useState } from "react";

//Gets Props from Cards.jsx

function Card(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [testGraphData, setTestGraphData] = useState({
    labels: [],
    datasets: [
      {
        label: "Chart",
        data: [1, 2, 3, 4, 5, 6],
      },
    ],
  });

  const percentage = props.market_cap_change_percentage_24h;
  const linkPath = `https://www.coingecko.com/en/coins/${props.name
    .toLowerCase()
    .replace(/\s/g, "-")}`;

  return (
    <div className="card">
      <div className="card-left">
        <FiStar
          className={click ? "star active" : "star"}
          onClick={handleClick}
        />
        <span>{props.index + 1}</span>
        <div>
          <img src={props.image} alt="coin" />
          <a href={linkPath} style={{ color: "#141414" }}>
            <h4>{props.name}</h4>
          </a>
        </div>
      </div>

      <div className="card-mid">
        <span>
          {props.currencySymbol}
          {props.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
        <span>
          {props.currencySymbol}
          {props.current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
        <span>
          {props.currencySymbol}
          {props.total_volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      </div>

      <div className="card-right">
        <span>
          {props.circulating_supply
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          <h4>{props.symbol}</h4>
        </span>
        <span>
          {percentage < 0 ? (
            <span style={{ color: "red" }}>
              <AiOutlineFall />
              {percentage}%
            </span>
          ) : (
            <span style={{ color: "#3AA966" }}>
              <AiOutlineRise />
              {percentage}%
            </span>
          )}
        </span>
        <div className="graph" style={{ width: "150px", height: "80px" }}>
          {/* Cant Figure Charts Just Yet */}
          {percentage < 0 ? (
            <img src="./images/downLine.svg" alt="" />
          ) : (
            <img src="./images/upLine.svg" alt="" />
          )}
          <span>
            <AiFillWarning style={{color: '#D9D908', fontSize: '1.5rem'}}/> Pictorial represenation !
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
