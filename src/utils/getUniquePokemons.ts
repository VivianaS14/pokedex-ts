import { PokemonsResponse } from "../interfaces";

export const getUniquePokemons = (data: PokemonsResponse) => {
  return data.results.filter(
    (pokemon, i) => data.results.findIndex((pk) => pk.id === pokemon.id) === i
  );
};
