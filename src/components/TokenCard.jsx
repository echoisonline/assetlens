import React from "react";
import { NavLink } from "react-router-dom";

const TokenCard = ({ coin }) => {
  console.log("TokenCard received:", coin); // Debugging\
  console.log(coin.item);

  if (!coin) return <p className="text-red-500">No Data Available</p>;

  const name = coin.item.name || "Unknown";
  const symbol = coin.item.symbol;
  const image = coin.item.large || "";
  const price = coin.item.data.price.toFixed(4);

  return (
    <NavLink to={`/coin/${symbol.toLowerCase()}`}>
      <div className="p-4 bg-[#585858] text-[#D9D9D9] shadow-md rounded-lg w- !p-[5px] grid grid-cols-[74px_1fr] items-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-16 h-16 !m-[5px_5px_0_5px]"
          />
        ) : (
          <p>No Logo</p>
        )}
        <h3 className="!pl-3 text-2xl font-[600] text-ce relative">{name}</h3>
        <p className="text-sm text-center">
          {"["}
          {symbol}
          {"]"}
        </p>
        <p className="!pl-3 text-2xl font-[500] relative bottom-3">
          {price}
          {"$"}
        </p>
      </div>
    </NavLink>
  );
};

export default TokenCard;
