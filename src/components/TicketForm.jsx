import { useState } from "react";
import axios from "axios";

export default function TicketForm({ projectId, refresh }) {
  const [form, setForm] = useState({
    title: "",
    priority: "Medium",
    projectId,
  });

  const submit = async () => {
    await axios.post("http://localhost:5000/api/tickets", form, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    refresh();
  };

  return (
    <div className="border p-4 mb-4 rounded">
      <input
        placeholder="Ticket title"
        className="border p-2 w-full mb-2"
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <select
        className="border p-2 w-full mb-2"
        onChange={(e) =>
          setForm({ ...form, priority: e.target.value })
        }
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button
        onClick={submit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Create Ticket
      </button>
    </div>
  );
}
