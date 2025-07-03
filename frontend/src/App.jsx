import "./index.css";
import React, { useState } from "react";
import axios from "axios";
import { LogoBar } from "./components/LogoBar";
import { NavBar } from "./components/NavBar";
import {SearchBar} from "./components/SearchBar";
import {SentimentStats} from "./components/SentimentStats"

export default function App() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  const fetchStats = async (id) => {
    setError("");
    setStats(null);
    try {
      const res = await axios.get(`/sentimentos/?id=${id}`);
      const comentarios = res.data.comentarios;
      const positivos = comentarios.filter(
        (c) => c.sentimento === "Positivo"
      ).length;
      const negativos = comentarios.filter(
        (c) => c.sentimento === "Negativo"
      ).length;
      setStats({ positivos, negativos });
    } catch (e) {
      setError(e.response?.data?.detail || "Erro ao buscar dados");
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-gray-900">
      <LogoBar />
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <SearchBar onSearch={fetchStats} />
      </div>
      <main className="max-w-7xl mx-auto px-4 mt-8">
        {error && <p className="text-red-600">{error}</p>}
        {stats && <SentimentStats {...stats} />}
      </main>
    </div>
  );
}
