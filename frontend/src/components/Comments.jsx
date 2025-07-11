import React, { useState, useEffect } from "react";
import {
  UserCircleIcon,
  FaceSmileIcon,
  FaceFrownIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";

export function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchComments = async (pageNum = 1) => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`http://localhost:8000/comentarios/?page=${pageNum}&limit=30`);
      
      const novos = res.data.comentarios;
      if (pageNum === 1) {
        setComments(novos);
      } else {
        setComments((prev) => [...prev, ...novos]);
      }
      const totalLoaded = (pageNum === 1 ? 0 : comments.length) + novos.length;
      setHasMore(novos.length > 0 && totalLoaded < res.data.total);
    } catch (e) {
      setError("Erro ao buscar comentários.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments(1);
    setPage(1);
  }, []);

  const handleShowMore = () => {
    const nextPage = page + 1;
    fetchComments(nextPage);
    setPage(nextPage);
  };

  return (
    <div className="bg-gray-50 py-12 px-4">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-8">
        Comentários Recentes
      </h2>
      <div className="max-w-7xl mx-auto mt-12">
        {error && <p className="text-red-600">{error}</p>}
        <div className="grid grid-cols-1 gap-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex bg-white p-4 rounded-lg shadow"
            >
              <UserCircleIcon className="h-12 w-12 text-gray-400 mr-4" />
              <div className="grid grid-cols-2 gap-4 w-full">
                <div>
                  <p className="text-gray-800 font-semibold">
                    {comment.id_autor}
                  </p>
                  <p className="text-gray-600 text-sm">{comment.comentario}</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600 font-medium">
                      {comment.sentimento}
                    </span>
                    {comment.sentimento === "Positivo" ? (
                      <FaceSmileIcon className="h-6 w-6 text-green-500" />
                    ) : comment.sentimento === "Negativo" ? (
                      <FaceFrownIcon className="h-6 w-6 text-red-500" />
                    ) : (
                      <FaceSmileIcon className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">
                    Postado em:{" "}
                    {comment.data_criacao
                      ? new Date(comment.data_criacao).toLocaleString("pt-BR")
                      : ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleShowMore}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "Carregando..." : "Ver mais"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
