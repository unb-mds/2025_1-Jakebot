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
      className="flex"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar Comentário"
        className="flex-1 px-4 py-3 border border-red-600 rounded-l-full bg-red-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 px-5 rounded-r-full flex items-center justify-center shadow-md"
      >
        <ArrowRightIcon className="h-6 w-6 text-white" />
      </button>
    </form>
  );
}
