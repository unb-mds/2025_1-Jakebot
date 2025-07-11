import React, { useState } from "react";
import axios from "axios";
import { LogoBar } from "../../components/LogoBar";
import { NavBar } from "../../components/NavBar";
import { SentimentStats } from "../../components/SentimentStats";
import { HelpPage } from "../../components/HelpPage";
import { Comments } from "../../components/Comments";
import { FilterProposalPage } from "../../components/ProposalFilter";
import { Routes, Route } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar";

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

export default function App() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");
  const [comments, setComments] = useState([]);

  const fetchStats = async (id) => {
    setError("");
    setStats(null);
    try {
      const res = await axios.get(`http://localhost:8000/sentimentos/?id=${id}`);
      const coms = res.data.comentarios;
      setComments(coms);
      const positivos = coms.filter((c) => c.sentimento === "Positivo").length;
      const negativos = coms.filter((c) => c.sentimento === "Negativo").length;
      const neutros = coms.filter((c) => c.sentimento === "Neutro").length;
      setStats({ positivos, negativos, neutros });
    } catch (e) {
      setError(e.response?.data?.detail || "Erro ao buscar dados");
    }
  };

  return (
    <>
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
              fetchComments={fetchStats}
              comments={comments}
              error={error}
            />
          }
        />
        <Route path="/helppage" element={<HelpPage />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </>
  );
}
