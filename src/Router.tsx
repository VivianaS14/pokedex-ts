import React from "react";
import { Routes, Route } from "react-router-dom";
import { Items, Item, Pokemon, Pokemons } from "./pages";

const App = () => {
  return (
    <div className="box-border grid grid-cols-1 h-screen content-between">
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:name" element={<Pokemon />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:name" element={<Item />} />
      </Routes>
    </div>
  );
};

export default App;
