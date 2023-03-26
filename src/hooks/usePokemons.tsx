import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../api";

interface Props {
  query: string;
}

export const usePokemons = ({ query }: Props) => {
  const pokemonsQuery = useQuery(
    ["pokemons", { query }],
    () => getPokemons({ query }),
    { staleTime: 1000 * 60 * 60 }
  );
  return pokemonsQuery;
};
