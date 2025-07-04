import React from "react";
import { PieChart, Pie, Cell } from "recharts";

/**
 * Componente que exibe um gráfico tipo donut, barra de proporções
 * e cards com valores e percentuais para Positivos e Negativos.
 * Props:
 *  - positivos: número de comentários positivos
 *  - negativos: número de comentários negativos
 */
export function SentimentStats({ positivos, negativos }) {
  // Dados apenas de positivos e negativos com cores definidas
  const data = [
    { name: "Positivos", value: positivos, color: "#4ade80" },
    { name: "Negativos", value: negativos, color: "#f87171" },
  ];

  const total = positivos + negativos || 1;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow ">
      <span className="text-[#4B6272] text-lg font-bold">Comentários</span>
      <div className="flex justify-center">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            paddingAngle={2}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>

      <div className="flex h-4 w-full rounded-lg overflow-hidden mt-4 shadow-inner">
        {data.map((entry, index) => (
          <div
            key={`bar-${index}`}
            style={{
              flex: entry.value,
              backgroundColor: entry.color,
            }}
          />
        ))}
      </div>

      {/* Cards de Valores e Percentuais */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {data.map((entry, index) => {
          const pct = ((entry.value / total) * 100).toFixed(2);
          return (
            <div
              key={`card-${index}`}
              className="bg-white p-4 rounded-lg shadow flex flex-col items-center"
            >
              <span
                className="text-sm font-medium"
                style={{ color: entry.color }}
              >
                {entry.name}
              </span>
              <span className="text-xl font-bold leading-none">
                {entry.value}
              </span>
              <span
                className="text-sm font-medium"
                style={{ color: entry.color }}
              >
                {pct}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
