import { useEffect, useState } from "react";
import axios from "axios";

export default function Comments({ ticketId }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const loadComments = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/comments/${ticketId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setComments(res.data));
  };

  const submit = async () => {
    if (!text.trim()) return;

    await axios.post(
      `http://localhost:5000/api/comments/${ticketId}`,
      { text },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setText("");
    loadComments();
  };

  useEffect(loadComments, []);

  return (
    <div className="mt-4">
      <h4 className="font-semibold mb-2">Comments</h4>

      <div className="space-y-2 mb-3">
        {comments.map((c) => (
          <div key={c._id} className="bg-gray-100 p-2 rounded">
            <p className="text-sm">{c.text}</p>
            <span className="text-xs text-gray-500">
              {c.userId.name} ·{" "}
              {new Date(c.createdAt).toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 w-full rounded mb-2"
        placeholder="Add a comment..."
      />

      <button
        onClick={submit}
        className="bg-blue-600 text-white px-3 py-1 rounded"
      >
        Comment
      </button>
    </div>
  );
}
