import { useState } from "react";
import axios from "axios";

export default function EditTicketModal({ ticket, onClose, refresh }) {
  const [title, setTitle] = useState(ticket.title);
  const [priority, setPriority] = useState(ticket.priority);
  const [status, setStatus] = useState(ticket.status);

  const updateTicket = async () => {
    await axios.put(
      `${import.meta.env.VITE_API_URL}/api/tickets/${ticket._id}`,
      { title, priority, status },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );

    refresh();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="font-bold text-lg mb-3">Edit Ticket</h2>

        <input
          className="border p-2 w-full mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          className="border p-2 w-full mb-2"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select
          className="border p-2 w-full mb-4"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Todo</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>

        <div className="flex justify-end gap-3">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={updateTicket}
            className="bg-blue-600 text-white px-4 py-1 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
