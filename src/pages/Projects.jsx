import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/projects`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setProjects(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>

      {projects.map((p) => (
        <div key={p._id} className="border p-4 mb-3 rounded">
          <h2 className="font-semibold">{p.title}</h2>
          <p className="text-sm text-gray-600">{p.description}</p>
        </div>
      ))}

      <button
        onClick={() => navigate(`/projects/${projects._id}/tickets`)}
        className="text-blue-600"
      >
        View Bugs
      </button>
    </div>
  );
}
