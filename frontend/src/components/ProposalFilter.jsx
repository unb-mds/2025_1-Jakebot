import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function ProposalFilter({ value, onChange }) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    axios
      .get("/propostas/")
      .then((res) => {
        // garante que temos um array
        const data = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data.propostas)
          ? res.data.propostas
          : [];
        setOptions(data);
      })
      .catch((err) => {
        console.error("Erro ao carregar propostas:", err);
        setLoadError("Não foi possível carregar propostas");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex-1">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Proposta
      </label>

      {loading ? (
        <div className="text-gray-500">Carregando propostas...</div>
      ) : loadError ? (
        <div className="text-red-600">{loadError}</div>
      ) : (
        <div className="relative">
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="
              block w-full
              bg-white border border-gray-300
              rounded-full px-4 py-2 pr-8
              shadow-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500
              disabled:opacity-50 disabled:cursor-not-allowed
              appearance-none
            "
          >
            <option value="">Todas</option>
            {options.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.titulo}
              </option>
            ))}
          </select>
          <ChevronDownIcon
            className="pointer-events-none absolute top-1/2 right-3
                       transform -translate-y-1/2 h-4 w-4 text-gray-400"
          />
        </div>
      )}
    </div>
  );
}
