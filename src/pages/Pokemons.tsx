import React, { useState } from "react";
import { Header, Footer } from "../components";

const Pokemons = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <h1 className="font-body">POKEMONS</h1>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
