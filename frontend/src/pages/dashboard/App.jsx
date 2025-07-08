import React, { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { LogoBar } from "../../components/LogoBar";
import { NavBar } from "../../components/NavBar";
import { SentimentStats } from "../../components/SentimentStats";
import { HelpPage } from "../../components/HelpPage";
import { FilterProposalPage } from "../../components/ProposalFilter";

export default function App() {
  const [stats, setStats] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");

  const fetchComments = async (id) => {
    setError("");
    setStats(null);
    setComments([]);
    try {
      const res = await axios.get(`/sentimentos/?id=${id}`);
      const coms = res.data.comentarios;
      setComments(coms);
      const positivos = coms.filter((c) => c.sentimento === "Positivo").length;
      const negativos = coms.filter((c) => c.sentimento === "Negativo").length;
      setStats({ positivos, negativos });
    } catch (e) {
      setError(e.response?.data?.detail || "Erro ao carregar comentários");
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <LogoBar />
      <NavBar />

      <Routes>
        <Route
          path="/filter-proposta"
          element={
            <FilterProposalPage
              fetchComments={fetchComments}
              comments={comments.map((c) => ({
                ...c,
                autor: c.id_autor,
                data: c.data_criacao,
              }))}
              error={error}
            />
          }
        />

        <Route
          path="/"
          element={
            <>
              <FilterProposalPage
                fetchComments={fetchComments}
                comments={comments.map((c) => ({
                  ...c,
                  autor: c.id_autor,
                  data: c.data_criacao,
                }))}
                error={error}
              />
              {stats && <SentimentStats {...stats} />}
            </>
          }
        />

        <Route path="/helppage" element={<HelpPage />} />
      </Routes>
    </div>
  );
}
