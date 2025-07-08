import React, { useState } from "react";

export function FilterProposalPage({ fetchComments, comments, error }) {
  const [propostaId, setPropostaId] = useState("");

 
  const formatDate = (iso) => (iso ? iso.slice(0, 19).replace("T", " ") : "");

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Filtrar por Proposta</h2>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Digite o ID da proposta"
          value={propostaId}
          onChange={(e) => setPropostaId(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => fetchComments(propostaId)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Buscar
        </button>
      </div>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <ul className="space-y-4">
        {comments.map((c) => (
          <li key={c.id} className="p-4 bg-white rounded-lg shadow">
            <p className="text-gray-800 mb-2">{c.comentario}</p>
            <div className="text-sm text-gray-500">
              Id do Autor: <span className="font-medium">{c.autor}</span> • Data:{" "}
              <span className="font-medium">{formatDate(c.data_criacao)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
