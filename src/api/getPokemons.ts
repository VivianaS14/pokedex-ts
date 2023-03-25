import { pokesApi } from "./pokesApi";
import { Pokemons } from "../interfaces/Pokemons";
import { getUniquePokemons } from "../utils/getUniquePokemons";
import { formatPokemonName } from "../utils/formatPokemonName";
import { sleep } from "../helpers/sleep";
// https://unpkg.com/pokemons@1.1.0/pokemons.json

export type Pokemon = {
  name: string;
  id: string;
  imgSrc: string;
};

export interface PokemonsResponse {
  results: Pokemon[];
}

export const getPokemons = async (): Promise<PokemonsResponse> => {
  await sleep(1);
  const { data } = await pokesApi.get<Pokemons>(`/pokemons.json`);
  const pokemonsResult = data.results.map((pokemon) => ({
    name: pokemon.name,
    id: pokemon.national_number,
    imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(
      pokemon.name.toLowerCase()
    )}.gif`,
  }));
  return { results: getUniquePokemons({ results: pokemonsResult }) };
};
