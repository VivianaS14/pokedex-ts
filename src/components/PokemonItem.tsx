import React from "react";
import { Link } from "react-router-dom";
import { BulbasaurGif } from "../assets";

const PokemonItem = () => {
  return (
    <Link
      to="/"
      className="flex gap-4 border-b-2 border-slate-50 p-3 items-center first:mr-4 last:m-0"
    >
      <img
        src={BulbasaurGif}
        alt="Bulbasaur Gift"
        className="w-8 h-8 object-contain"
      />
      <div className="flex-grow block">
        <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent text-lg font-bold">
          Bulbasaur
        </span>
        <span className="block text-gray-600 font-extrabold text-xs">001</span>
      </div>
    </Link>
  );
};

export default PokemonItem;
