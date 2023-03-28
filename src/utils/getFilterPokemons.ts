import { PokemonsResponse } from "../interfaces";

export const getFilterPokemons = (data: PokemonsResponse, query: string) => {
  return data?.results.filter((pokemon) =>
    pokemon.name.toLowerCase().match(query.toLowerCase())
  );
};
