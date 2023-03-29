import React from "react";
import { Footer, Header, LoadingScreen } from "../components";
import { useParams, useNavigate } from "react-router-dom";
import { PokeballIcon } from "../assets";
import { useLocation } from "../hooks";

const Location = () => {
  const params = useParams();
  const navigate = useNavigate();
  const locationQuery = useLocation(params.name);

  return (
    <>
      <button
        onClick={() => navigate("/locations")}
        className="cursor-pointer outline-none flex items-center py-7 px-12 bg-gradient-to-r from-indigo-200 to-amber-100"
      >
        <img src={PokeballIcon} alt="Pokeball Back" className="w-6 h-6 mr-2" />
        Go Back
      </button>
      {locationQuery.isFetching ? (
        <LoadingScreen />
      ) : (
        <main className="flex flex-col items-center my-24 ">
          <h2 className="my-5 text-4xl font-bold">
            {params.name?.replace("-", " ").toUpperCase()}
          </h2>
          <p>No. {locationQuery.data?.id} </p>
          <h4>Region: {locationQuery.data?.region.name} </h4>
          <p className="w-4/6 text-center pt-3">
            Areas:
            {locationQuery.data?.areas.map((area, i) => (
              <li key={i}>{area.name}</li>
            ))}
          </p>
        </main>
      )}
      <Footer />
    </>
  );
};

export default Location;
