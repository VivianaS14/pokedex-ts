import axios from "axios";
import { Pokemons, PokemonsResponse } from "../interfaces";
import {
  getUniquePokemons,
  formatPokemonName,
  getFilterPokemons,
} from "../utils";
import { sleep } from "../helpers/sleep";
// https://unpkg.com/pokemons@1.1.0/pokemons.json

const pokesApi = axios.create({
  baseURL: "https://unpkg.com/pokemons@1.1.0",
});

interface Props {
  query: string;
}

export const getPokemons = async ({
  query,
}: Props): Promise<PokemonsResponse> => {
  await sleep(1);
  const { data } = await pokesApi.get<Pokemons>(`/pokemons.json`);
  const pokemonsResult = data.results.map((pokemon) => ({
    name: pokemon.name,
    id: pokemon.national_number,
    imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(
      pokemon.name.toLowerCase()
    )}.gif`,
  }));
  const AllPokemons = getFilterPokemons({ results: pokemonsResult }, query);
  return { results: getUniquePokemons({ results: AllPokemons }) };
};
