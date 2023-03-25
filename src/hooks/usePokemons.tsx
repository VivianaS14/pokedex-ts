import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../api/getPokemons";

export const usePokemons = () => {
  const pokemonsQuery = useQuery(["pokemons"], getPokemons);
  return pokemonsQuery;
};
