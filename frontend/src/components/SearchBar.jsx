import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      await onSearch(query.trim());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white px-6 py-3 rounded-xl drop-shadow-lg content-around gap-20"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar Comentário"
        className="flex-1 px-4 py-3 border rounded-xl bg-[#F2F2F2] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#2864AE] text-[#2864AE]"
      />
      <button
        type="submit"
        disabled={isLoading}
        className={`flex items-center justify-center rounded-full px-5 py-3 shadow-md transition-colors duration-200 text-white font-semibold
          ${
            isLoading
              ? "bg-blue-300 cursor-wait"
              : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
          }`}
        style={{ minWidth: 48, minHeight: 48 }}
      >
        {isLoading ? (
          <svg
            className="h-6 w-6 animate-spin text-white opacity-80"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        ) : (
          <ArrowRightIcon className="h-6 w-6" />
        )}
      </button>
        
    </form>
  );
}
