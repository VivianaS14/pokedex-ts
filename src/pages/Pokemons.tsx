import React, { useState } from "react";
import { Header } from "../components";

const Pokemons = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <h1 className="font-body">POKEMONS</h1>
      </main>
      <footer>FOOTER</footer>
    </>
  );
};

export default Pokemons;
