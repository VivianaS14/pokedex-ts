import React, { useState } from "react";
import { Header, Footer, PokemonItem } from "../components";

const Pokemons = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main className="p-3 h-full overflow-auto">
        <nav>
          <PokemonItem />
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
