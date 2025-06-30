import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

export function SentimentStats({ positivos, negativos }) {
  const data = [
    { name: "Positivos", value: positivos },
    { name: "Negativos", value: negativos },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Gráfico de Pizza */}
      <div className="bg-white p-4 rounded-lg shadow flex justify-center">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            <Cell fill="#4ade80" />
            <Cell fill="#f87171" />
          </Pie>
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </div>

      {/* Cards de Métricas */}
      <div className="space-y-4">
        {[
          { label: "Positivos", value: positivos, color: "text-green-600" },
          { label: "Negativos", value: negativos, color: "text-red-600" },
        ].map(({ label, value, color }) => (
          <div
            key={label}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <span className={`font-medium ${color}`}>{label}:</span>
            <span className="text-2xl font-bold">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
