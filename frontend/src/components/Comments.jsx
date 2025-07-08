import React, {useState,useEffect} from "react";
import { UserCircleIcon, FaceSmileIcon, FaceFrownIcon } from "@heroicons/react/24/outline";
import axios from "axios";



export function Comments() {
  const [comments, setComments] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchComments() {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get("/comentarios/");
        const sorted = res.data.sort(
          (a, b) => new Date(b.data_criacao) - new Date(a.data_criacao)
        );
        setComments(sorted);
      } catch (e) {
        setError("Erro ao buscar comentários.");
      } finally {
        setLoading(false);
      }
    }
    fetchComments();
  }, []);



  return (
    <div className="bg-gray-50 py-12 px-4">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-8">
        Comentários Recentes
      </h2>
      <div className="max-w-7xl mx-auto mt-12">
        {loading && <p>Carregando comentários...</p>}
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
                    ) : (
                      <FaceFrownIcon className="h-6 w-6 text-red-500" />
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
      </div>
    </div>
  );
}