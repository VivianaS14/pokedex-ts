import React from "react";
import { PikachuGift } from "../assets";

const LoadingScreen = () => {
  return (
    <div className="h-35 grid place-items-center">
      <img src={PikachuGift} alt="Pokedex Loading" className="w-1/3 max-w-xs" />
    </div>
  );
};

export default LoadingScreen;
