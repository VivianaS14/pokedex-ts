import React, { useState } from "react";
import { Header, Footer, ItemsItem, LoadingScreen } from "../components";
import { useItems } from "../hooks";

const Items = () => {
  const [query, setQuery] = useState<string>("");
  const itemsQuery = useItems(query);

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
      </main>
      <Footer />
    </>
  );
};

export default Items;
