import React, { FC } from "react";
import { Link } from "react-router-dom";
import { PokemonDetail } from "../interfaces";

interface Props {
  data: PokemonDetail;
}

const PokemonItem: FC<Props> = ({ data }) => {
  return (
    <Link
      to={`/pokemons/${data.name}`}
      className="flex gap-4 border-b-2 border-slate-50 p-3 items-center first:mr-4 last:m-0"
    >
      <img
        src={data.imgSrc}
        alt={`${data.name} Gift`}
        className="w-8 h-8 object-contain"
      />
      <div className="flex-grow block">
        <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent text-xl font-bold">
          {data.name}
        </span>
        <span className="block text-gray-600 font-extrabold text-md">
          {data.id}
        </span>
      </div>
    </Link>
  );
};

export default PokemonItem;
