import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (query.trim()) onSearch(query.trim());
      }}
      className="flex items-center bg-white px-6 py-3 rounded-xl drop-shadow-lg content-around gap-20"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar Comentário"
        className="flex-1 px-4 py-3 border rounded-xl bg-[#F2F2F2] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#2864AE] text-[#2864AE]"
      />
      <button type="submit"
        className="text-left">
        <span className="bg-[#2864AE] hover:bg-[#1f4e86] flex items-center justify-center rounded-full border-none w-12 aspect-square mr-4">
          <ArrowRightIcon className="h-7 w-7 text-white" />
        </span>
      </button>
    </form>
  );
}
