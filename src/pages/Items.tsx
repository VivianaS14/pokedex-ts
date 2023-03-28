import React, { useState } from "react";
import { PokeballIcon } from "../assets";
import { Header, Footer, ItemsItem, LoadingScreen } from "../components";
import { useItems } from "../hooks";

const Items = () => {
  const [query, setQuery] = useState<string>("");
  const { itemsQuery, page, nextPage, prevPage } = useItems(query);

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main className="p-3 h-full overflow-auto">
        {itemsQuery.isFetching ? (
          <LoadingScreen />
        ) : (
          <nav className="mb-3 md:grid grid-cols-2 lg:grid-cols-4">
            {itemsQuery.data?.results.map((item, i) => (
              <ItemsItem key={i} data={item} />
            ))}
          </nav>
        )}
        {!itemsQuery.isFetching ? (
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

export default Items;
