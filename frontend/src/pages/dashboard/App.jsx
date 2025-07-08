import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { LogoBar } from "../../components/LogoBar";
import { NavBar } from "../../components/NavBar";
import { SearchBar } from "../../components/SearchBar";
import { ProposalFilter } from "../../components/ProposalFilter";
import { FilterBar } from "../../components/FilterBar";
import { SentimentStats } from "../../components/SentimentStats";
import { HelpPage } from "../../components/HelpPage";
import { Routes, Route } from "react-router-dom";

function Dashboard({ fetchStats, error, stats }) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <SearchBar onSearch={fetchStats} />
      </div>
      <main className="max-w-7xl mx-auto px-4 mt-8">
        {error && <p className="text-red-600">{error}</p>}
        {stats && <SentimentStats {...stats} />}
      </main>
    </>
  );
}

function FilterProposalPage({ filters, setFilters, fetchStats, error, stats }) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <h2 className="text-2xl font-semibold mb-4">Filtrar por Proposta</h2>
        <div className="flex space-x-4 items-end">
          <ProposalFilter
            value={filters.proposta}
            onChange={(val) => setFilters((f) => ({ ...f, proposta: val }))}
          />
          <button
            onClick={() => fetchStats()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Buscar
          </button>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 mt-8">
        {error && <p className="text-red-600">{error}</p>}
        {stats && <SentimentStats {...stats} />}
      </main>
    </>
  );
}

function FilterSentimentPage({
  filters,
  setFilters,
  fetchStats,
  error,
  stats,
}) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <h2 className="text-2xl font-semibold mb-4">Filtrar por Sentimento</h2>
        <div className="flex space-x-4 items-end">
          <FilterBar
            value={filters.sentimento}
            onChange={(val) => setFilters((f) => ({ ...f, sentimento: val }))}
          />
          <button
            onClick={() => fetchStats()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Buscar
          </button>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 mt-8">
        {error && <p className="text-red-600">{error}</p>}
        {stats && <SentimentStats {...stats} />}
      </main>
    </>
  );
}

export default function App() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    proposta: "",
    sentimento: "",
  });

  const fetchStats = async (idParam) => {
    setError("");
    setStats(null);

    try {
      const params = new URLSearchParams();
      // idParam vem do SearchBar; filtro.proposta vem da página de proposta
      if (idParam) params.append("id", idParam);
      else if (filters.proposta) params.append("id", filters.proposta);

      if (filters.sentimento) params.append("sentimento", filters.sentimento);

      const res = await axios.get(`/sentimentos/?${params.toString()}`);
      const comentarios = res.data.comentarios;
      const positivos = comentarios.filter(
        (c) => c.sentimento === "Positivo"
      ).length;
      const negativos = comentarios.filter(
        (c) => c.sentimento === "Negativo"
      ).length;
      setStats({ positivos, negativos });
    } catch (e) {
      // normaliza mensagem de erro do FastAPI
      const detail = e.response?.data?.detail;
      let msg;
      if (typeof detail === "string") {
        msg = detail;
      } else if (Array.isArray(detail)) {
        msg = detail.map((item) => item.msg).join("; ");
      } else {
        msg = "Erro ao buscar dados";
      }
      setError(msg);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-gray-900">
      <LogoBar />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard fetchStats={fetchStats} error={error} stats={stats} />
          }
        />
        <Route
          path="/filter-proposta"
          element={
            <FilterProposalPage
              filters={filters}
              setFilters={setFilters}
              fetchStats={fetchStats}
              error={error}
              stats={stats}
            />
          }
        />
        <Route
          path="/filter-sentimento"
          element={
            <FilterSentimentPage
              filters={filters}
              setFilters={setFilters}
              fetchStats={fetchStats}
              error={error}
              stats={stats}
            />
          }
        />
        <Route path="/helppage" element={<HelpPage />} />
      </Routes>
    </div>
  );
}
