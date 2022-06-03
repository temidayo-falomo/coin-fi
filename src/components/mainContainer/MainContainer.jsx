import React from "react";
import "./MainContainer.css";
import "../bar/Bar.css";
import CardBox from "../cardBox/CardBox";
import { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import { currenciesData } from "../data/currenciesData";

//Passes the filtered coins to CardBox - Cards - Card

function MainContainer(props) {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [error, setError] = useState(false);
  const [currencyValue, setCurrencyValue] = useState("usd");
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const [visible, setVisible] = useState(20);
  const [loading, setLoading] = useState(false);

  //Calling Gecko Currencies Api/GraphDataApi Axios
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyValue}&order=market_cap_desc&per_page=200&page=1&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => setError(error));

    //Graph Data Api
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=max&type=json"
      )
      .then((res) => {
        // console.log(res.data);
        setGraphData(res.data);
      });
  }, [currencyValue]);

  //Handle Select/Option changes (USD, NGN, EUR...etc)
  const handleSelectChange = (e) => {
    setCurrencyValue(e.target.value);
    const tag = e.target.selectedOptions[0].dataset.tag;
    setCurrencySymbol(tag);
  };

  //Filter and Slice Method over the initial api array
  const filteredCoins = coins
    .slice(0, visible)
    .filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

  //Pagination Logic
  const showMoreItems = () => {
    setTimeout(() => {
      setVisible((prevValue) => prevValue * 2);
    }, 1000);
  };

  //Get Input Search Value
  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <section className="MainContainer">
      <form className="Bar TopBar">
        <div className="bar-left">
          <div className="logo">
            <img src="./images/logo.svg" alt="" className="logo"/>
          </div>
          <input
            type="search"
            className="search"
            placeholder="Search"
            onChange={handleSearchChange}
          />
          <div>
            <a href="/">Converter</a>
            <a href="/">Exchanges</a>
          </div>
        </div>

        <div className="bar-right">
          <select name="" id="" onChange={handleSelectChange}>
            {currenciesData.map((currencyData) => {
              return (
                <option
                  data-tag={currencyData.symbol}
                  value={currencyData.value}
                  key={currencyData.value}
                >
                  {currencyData.value}
                </option>
              );
            })}
          </select>
        </div>
      </form>

      <CardBox
        filteredCoins={filteredCoins}
        currencySymbol={currencySymbol}
        graphData={graphData}
      />

      <button className="load-more" onClick={showMoreItems}>
        Load More Coins
      </button>
    </section>
  );
}

export default MainContainer;
