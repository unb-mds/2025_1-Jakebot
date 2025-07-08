import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import {useNavigate } from "react-router-dom"

const items = [
  { title: "Dashboard", subtitle: "Inicial" },
  { title: "Comentários", subtitle: "Recentes" },
  { title: "Filtrar por", subtitle: "Proposta" },
  { title: "Filtrar por", subtitle: "Sentimento" },
  { title: "Ajuda", subtitle: "& Sobre" },
];

export function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-[#F2F2F2] py-4 drop-shadow-md">
      <div className="max-w-7xl mx-auto flex gap-12 justify-center px-4 py-2 items-start">
        {items.map(({ title, subtitle }) => (
          <button
            key={title + subtitle}
            className="flex items-center bg-white hover:bg-gray-100 px-3 py-4 rounded-lg drop-shadow-lg transition min-w-[220px] text-left"
            onClick={() => {
              if (title === "Ajuda" && subtitle === "& Sobre"){
                navigate("/helppage");
              }

              else if (title === "Dashboard" && subtitle === "Inicial") {
                navigate("/");
              }
              
              else if (title === "Filtrar por" && subtitle === "Proposta") {
                navigate("/filter-proposta");
              }

              else if (title === "Comentários" && subtitle === "Recentes") {
                navigate("/comments")
              }
          }
          }
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
