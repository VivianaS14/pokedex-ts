import React, { FC } from "react";
import { Link } from "react-router-dom";
import { PokedexIcon, PokeballIcon } from "../assets";
import { ItemsResult } from "../interfaces";

interface Props {
  data: ItemsResult;
}

const ItemsItem: FC<Props> = ({ data }) => {
  return (
    <Link
      to="/items"
      className="flex gap-4 border-b-2 border-slate-50 p-3 items-center first:mr-4 last:m-0"
    >
      <img
        src={data?.imgSrc && PokeballIcon}
        alt=""
        className="w-8 h-8 object-contain"
      />
      <div className="flex-grow block">
        <span className="bg-gradient-to-r from-red-500 to-blue-400 bg-clip-text text-transparent text-xl font-bold">
          {data?.name}
        </span>
        <span className="block text-gray-600 text-md hover:underline hover:text-sky-400">
          Details
        </span>
      </div>
    </Link>
  );
};

export default ItemsItem;
