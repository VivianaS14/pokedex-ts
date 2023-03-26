import React from "react";
import { Link } from "react-router-dom";
import { PokedexIcon } from "../assets";

const ItemsItem = () => {
  return (
    <Link
      to="/"
      className="flex gap-4 border-b-2 border-slate-50 p-3 items-center first:mr-4 last:m-0"
    >
      <img src={PokedexIcon} alt="" className="w-8 h-8 object-contain" />
      <div className="flex-grow block">
        <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent text-xl font-bold">
          Pokedex
        </span>
        <span className="block text-gray-600 font-extrabold text-md">005</span>
      </div>
    </Link>
  );
};

export default ItemsItem;
