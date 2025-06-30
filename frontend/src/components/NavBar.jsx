import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const items = [
  "Dashboard Inicial",
  "Comentários Recentes",
  "Filtrar por Proposta",
  "Filtrar por Sentimento",
  "Ajuda & Sobre",
];

export function NavBar() {
  return (
    <nav className="bg-blue-50 border-b border-blue-200">
      <div className="max-w-7xl mx-auto flex space-x-3 px-4 py-2">
        {items.map((label) => (
          <button
            key={label}
            className="flex items-center space-x-1 bg-white hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium text-blue-700 shadow"
          >
            <ArrowRightIcon className="h-4 w-4 text-blue-500" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
