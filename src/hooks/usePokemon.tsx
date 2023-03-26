import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../api";

export const usePokemon = (name: string = "") => {
  const pokemonQuery = useQuery(["pokemons", name], () => getPokemon(name));
  return pokemonQuery;
};
