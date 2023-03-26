import axios from "axios";
import { PokemonDetail, Pokemon } from "../interfaces";
import { formatPokemonName } from "../utils";
// https://pokeapi.co/api/v2/pokemon/bulbasaur

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});

export const getPokemon = async (name: string): Promise<PokemonDetail> => {
  const { data } = await pokeApi.get<Pokemon>(`/${formatPokemonName(name)}`);
  const pokemonResult = {
    name: data.name,
    id: data.id.toString(),
    imgSrc: data.sprites.front_default,
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
  };
  return pokemonResult;
};
