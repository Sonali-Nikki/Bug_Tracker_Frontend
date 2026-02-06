import { useState } from "react";
import axios from "axios";

export default function TicketForm({ projectId, refresh }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  console.log("TicketForm projectId:", projectId);


const submit = async () => {
  if (!projectId || projectId === "undefined") {
    alert("Project not loaded yet");
    return;
  }

  if (!form.title.trim()) {
    alert("Title is required");
    return;
  }

  const payload = {
    title: form.title,
    priority: form.priority,
    projectId,
  };

  console.log("SENDING PAYLOAD:", payload);

  try {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/tickets`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setForm({ title: "", priority: "Medium" });
    refresh();
  } catch (err) {
    console.error("CREATE TICKET ERROR:", err.response?.data);
  }
};


  return (
    <div className="border p-4 mb-4 rounded">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ticket title"
        className="border p-2 w-full mb-2"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 w-full mb-2"
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
