
import React from "react";

export function FilterBar({ value, onChange }) {
  return (
    <div className="flex-1">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Sentimento
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          block w-full
          bg-white border border-gray-300
          rounded-full
          px-4 py-2 pr-8
          shadow-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500
          appearance-none
        "
      >
        <option value="">Todos</option>
        <option value="Positivo">Positivos</option>
        <option value="Negativo">Negativos</option>
      </select>
    </div>
  );
}
