import React, { useEffect, useState } from "react";
import CoinCard from "./CoinCard.js";

const Prices = ({ coinData }) => {
  // const [coinData, setCoinData] = useState([]);
  // useEffect(() => {
  //   requestData;
  // // });

  // if (!coinData) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div>
      <ul className="content-center p-4 list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {coinData.data.map((coin) => (
          <CoinCard coin={coin} key={coin.id} />
        ))}
      </ul>
    </div>
  );
};

export default Prices;
