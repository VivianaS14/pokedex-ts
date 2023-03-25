import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Footer } from "../components";
import { BulbasaurGif, PokeballIcon } from "../assets";

const Pokemon = () => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate("/")}
        className="cursor-pointer outline-none flex items-center py-7 px-12 bg-gradient-to-r from-indigo-200 to-amber-100"
      >
        <img src={PokeballIcon} alt="Pokeball Back" className="w-6 h-6 mr-2" />
        Go Back
      </button>
      <main className="flex flex-col items-center my-24 ">
        <h2 className="my-5 text-4xl font-bold">{"Name".toUpperCase()}</h2>
        <p>Nr. 001</p>
        <div>
          <img src={BulbasaurGif} alt="" className="w-24 my-12" />
        </div>
        <h4>HP: 00</h4>
        <h4>Attack: 20</h4>
        <h4>Defense: 40</h4>
      </main>
      <Footer />
    </>
  );
};

export default Pokemon;
