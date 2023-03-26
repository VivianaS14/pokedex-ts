import React from "react";
import { Link } from "react-router-dom";
import { PikachuIcon, PointerIcon, PokeballIcon } from "../assets";

const Footer = () => {
  return (
    <footer className="w-full p-3 flex justify-around  bg-gradient-to-r from-indigo-200 to-amber-100">
      <Link
        to="/pokemons"
        className="w-1/3 flex flex-col items-center text-center text-gray-800 my-3"
      >
        <img src={PikachuIcon} alt="Logo Pikachu" width="40" className="my-1" />
        Pokemons
      </Link>
      <Link
        to="/items"
        className="w-1/3 flex flex-col items-center text-center text-gray-800 my-3"
      >
        <img
          src={PokeballIcon}
          alt="Logo Pikachu"
          width="40"
          className="my-1"
        />
        Items
      </Link>
      <Link
        to="/pokemons"
        className="w-1/3 flex flex-col items-center text-center text-gray-800 my-3"
      >
        <img src={PointerIcon} alt="Logo Pikachu" width="40" className="my-1" />
        Map
      </Link>
    </footer>
  );
};

export default Footer;
