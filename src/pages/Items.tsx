import React, { useState } from "react";
import { Header, Footer, ItemsItem } from "../components";

const Items = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main className="p-3 h-full overflow-auto">
        <nav className="mb-3 md:grid grid-cols-2 lg:grid-cols-4">
          <ItemsItem />
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Items;
