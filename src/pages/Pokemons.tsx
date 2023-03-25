import React, { useState } from "react";
import { Header, Footer, PokemonItem, LoadingScreen } from "../components";
import { usePokemons } from "../hooks";

const Pokemons = () => {
  const [query, setQuery] = useState<string>("");
  const pokemonsQuery = usePokemons({ query });

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main className="p-3 h-full overflow-auto">
        <nav className="mb-3">
          {pokemonsQuery.isLoading ? (
            <LoadingScreen />
          ) : (
            pokemonsQuery.data?.results
              .slice(0, 50)
              .map((pokemon) => <PokemonItem key={pokemon.id} data={pokemon} />)
          )}
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
