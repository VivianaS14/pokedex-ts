import React, { useState } from "react";
import { PokeballIcon } from "../assets";
import { Header, Footer, PokemonItem, LoadingScreen } from "../components";
import { usePokemons } from "../hooks";

const Pokemons = () => {
  const [query, setQuery] = useState<string>("");
  const [last, setLast] = useState<number>(20);
  const pokemonsQuery = usePokemons({ query });

  const handleLoadMore = () => {
    setLast(last + 10);
  };

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main className="p-3 h-full overflow-auto">
        <nav className="mb-3">
          {pokemonsQuery.isLoading ? (
            <LoadingScreen />
          ) : (
            pokemonsQuery.data?.results
              .slice(0, last)
              .map((pokemon) => <PokemonItem key={pokemon.id} data={pokemon} />)
          )}
        </nav>
        <button
          type="button"
          onClick={handleLoadMore}
          className="w-full flex justify-center py-4 bg-gradient-to-r from-red-500 to-slate-300 bg-clip-text text-transparent text-md font-bold cursor-pointer"
        >
          <img src={PokeballIcon} alt="More Button" className="w-6 h-6 mr-2" />
          More Pokemons
        </button>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
