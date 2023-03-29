import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PointerIcon, PokeballIcon } from "../assets";
import { Footer, Header, LoadingScreen } from "../components";
import { useLocations } from "../hooks";

const Locations = () => {
  const [query, setQuery] = useState<string>("");
  const { locationsQuery, page, prevPage, nextPage } = useLocations(query);

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main className="p-3 h-full overflow-auto">
        {locationsQuery.isFetching ? (
          <LoadingScreen />
        ) : (
          <nav className="mb-3 md:grid grid-cols-2 lg:grid-cols-4">
            {locationsQuery.data?.results.map((loca) => (
              <Link
                to={`/locations/${loca.name}`}
                className="flex items-center border-b-2 border-slate-50 p-3 first:mr-4 last:m-0"
              >
                <img
                  src={PointerIcon}
                  alt="Pointer Location"
                  className="w-9 h-9 object-contain"
                />
                <h3 className="bg-gradient-to-r from-indigo-500 to-green-300 bg-clip-text text-transparent text-xl font-bold pl-2">
                  {loca.name.replace("-", " ")}
                </h3>
              </Link>
            ))}
          </nav>
        )}
        {!locationsQuery.isFetching ? (
          <section className="w-full flex justify-between py-2">
            <button
              type="button"
              onClick={prevPage}
              className="pl-10 flex items-center bg-gradient-to-r from-red-500 to-slate-500 bg-clip-text text-transparent text-md cursor-pointer"
            >
              <img
                src={PokeballIcon}
                alt="Pokeball Prev"
                className="w-6 h-6 mr-2"
              />
              Prev
            </button>
            <p className="text-slate-500">Pag. {page}</p>
            <button
              type="button"
              onClick={nextPage}
              className="pr-10 flex items-center bg-gradient-to-r from-red-500 to-slate-300 bg-clip-text text-transparent text-md cursor-pointer"
            >
              Next
              <img
                src={PokeballIcon}
                alt="Pokeball Prev"
                className="w-6 h-6 ml-2"
              />
            </button>
          </section>
        ) : (
          <span></span>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Locations;
