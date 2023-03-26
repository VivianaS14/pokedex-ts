import React, { FC } from "react";

interface Props {
  query: string;
  setQuery: (query: string) => void;
}

const Header: FC<Props> = ({ query, setQuery }) => {
  return (
    <header className="grid place-items-center text-xl p-3 bg-gradient-to-r from-indigo-200 to-amber-100">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="px-4 py-2 rounded-md m-2 w-4/5 outline-none font-body bg-slate-500/25 text-slate-900"
      />
    </header>
  );
};

export default Header;
