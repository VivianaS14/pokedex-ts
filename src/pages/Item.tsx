import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PokeballIcon } from "../assets";
import { Footer, LoadingScreen } from "../components";
import { useItem } from "../hooks";

const Item = () => {
  const params = useParams();
  const navigate = useNavigate();
  const itemQuery = useItem(params.name);

  return (
    <>
      <button
        onClick={() => navigate("/items")}
        className="cursor-pointer outline-none flex items-center py-7 px-12 bg-gradient-to-r from-indigo-200 to-amber-100"
      >
        <img src={PokeballIcon} alt="Pokeball Back" className="w-6 h-6 mr-2" />
        Go Back
      </button>
      {itemQuery.isFetching ? (
        <LoadingScreen />
      ) : (
        <main className="flex flex-col items-center my-24 ">
          <h2 className="my-5 text-4xl font-bold">
            {params.name?.toUpperCase()}
          </h2>
          <p>Nr. {itemQuery.data?.id}</p>
          <div>
            <img
              src={itemQuery.data?.sprites.default}
              alt=""
              className="w-20 my-12"
            />
          </div>
          <h4>Cost: {itemQuery.data?.cost}</h4>
          <p className="w-4/6 text-center pt-3">
            {itemQuery.data?.effect_entries[0].effect}
          </p>
        </main>
      )}

      <Footer />
    </>
  );
};

export default Item;
