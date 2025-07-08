import React from "react";
import { UserCircleIcon, FaceSmileIcon, FaceFrownIcon } from "@heroicons/react/24/outline";

const COMMENTS = [
  {
    name: "Eduardo Ribeiro",
    content: "Adorei a proposta! Acho que vai ajudar muito na transparência do governo. Mais texto só para testar aqui o tamanho da caixa, é bem dificil escrever besteira assim sem pensar em nada sabe.",
    sentiment: "positivo",
    date: "23/10/2025",
  },
  {
    name: "Lucas Chaves",
    content: "Odiei a proposta! Acho que não vai ajudar muito na transparência do governo.",
    sentiment: "negativo",
    date: "23/10/2025",
  },
]

export function Comments() {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-8">
        Comentários Recentes
      </h2>
      <div className="max-w-7xl mx-auto mt-12">
        <div className="grid grid-cols-1 gap-6">
          {COMMENTS.map((comment) => (
            <div
              key={comment.name}
              className="flex bg-white p-4 rounded-lg shadow"
            >
              <UserCircleIcon className="h-12 w-12 text-gray-400 mr-4" />
              <div className="grid grid-cols-2 gap-4 w-full">
                <div>
                  <p className="text-gray-800 font-semibold">{comment.name}</p>
                  <p className="text-gray-600 text-sm">{comment.content}</p>
                </div>
                <div className="">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600 font-medium">
                      {comment.sentiment.charAt(0).toUpperCase() + comment.sentiment.slice(1)}
                    </span>
                    {comment.sentiment === "positivo" ? (
                      <FaceSmileIcon className="h-6 w-6 text-green-500" />
                    ) : (
                      <FaceFrownIcon className="h-6 w-6 text-red-500" />
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">Postado em: {comment.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}