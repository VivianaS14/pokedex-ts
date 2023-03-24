import React from "react";
import { useParams } from "react-router-dom";

const Pokemon = () => {
  const params = useParams();

  return (
    <div>
      <h2>Pokemon {params.name}</h2>
    </div>
  );
};

export default Pokemon;
