import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const items = [
  { title: "Dashboard", subtitle: "Inicial" },
  { title: "Comentários", subtitle: "Recentes" },
  { title: "Filtrar por", subtitle: "Proposta" },
  { title: "Filtrar por", subtitle: "Sentimento" },
  { title: "Ajuda", subtitle: "& Sobre" },
];

export function NavBar() {
  return (
    <nav className="bg-navbar/20 py-4">
      <div className="max-w-7xl mx-auto flex gap-6 justify-center px-4 py-2 items-start">
        {items.map(({ title, subtitle }) => (
          <button
            key={title + subtitle}
            className="flex items-center bg-white hover:bg-gray-100 px-4 py-3 rounded-xl shadow-lg transition min-w-[270px] text-left"
          >
            <span className="flex items-center justify-center rounded-full border-2 border-navbar w-12 aspect-square mr-4">
              <ArrowRightIcon className="h-6 w-6 text-navbar" />
            </span>
            <span className="flex flex-col justify-center items-end w-full">
              <span className="font-bold text-lg text-navbar">{title}</span>
              <span className="text-base text-navbar ml-2">{subtitle}</span>
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
