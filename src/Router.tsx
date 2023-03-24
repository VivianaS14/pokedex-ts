import React from "react";
import { Routes, Route } from "react-router-dom";
import { Items, Pokemon, Pokemons } from "./pages";

const App = () => {
  return (
    <div className="App box-border">
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:name" element={<Pokemon />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </div>
  );
};

export default App;
