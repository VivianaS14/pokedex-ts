import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Footer, LoadingScreen } from "../components";
import { usePokemon } from "../hooks";
import { BulbasaurGif, PokeballIcon } from "../assets";

const Pokemon = () => {
  const params = useParams();
  const navigate = useNavigate();
  const pokemonQuery = usePokemon(params.name?.toLowerCase());

  return (
    <>
      <button
        onClick={() => navigate("/")}
        className="cursor-pointer outline-none flex items-center py-7 px-12 bg-gradient-to-r from-indigo-200 to-amber-100"
      >
        <img src={PokeballIcon} alt="Pokeball Back" className="w-6 h-6 mr-2" />
        Go Back
      </button>
      {pokemonQuery.isLoading ? (
        <LoadingScreen />
      ) : (
        <main className="flex flex-col items-center my-24 ">
          <h2 className="my-5 text-4xl font-bold">
            {params.name?.toUpperCase()}
          </h2>
          <p>Nr. {pokemonQuery.data?.id}</p>
          <div>
            <img
              src={pokemonQuery.data?.imgSrc}
              alt={pokemonQuery.data?.name}
              className="w-28 my-12"
            />
          </div>
          <h4>HP: {pokemonQuery.data?.hp}</h4>
          <h4>Attack: {pokemonQuery.data?.attack}</h4>
          <h4>Defense: {pokemonQuery.data?.defense}</h4>
        </main>
      )}

      <Footer />
    </>
  );
};

export default Pokemon;
