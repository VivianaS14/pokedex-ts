import React from "react";
import { Routes, Route } from "react-router-dom";
import { Items, Item, Pokemon, Pokemons, Locations, Location } from "./pages";

const App = () => {
  return (
    <div className="box-border grid grid-cols-1 h-screen content-between">
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:name" element={<Pokemon />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:name" element={<Item />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:name" element={<Location />} />
      </Routes>
    </div>
  );
};

export default App;
