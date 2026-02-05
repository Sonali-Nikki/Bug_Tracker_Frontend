import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import TicketForm from "../components/TicketForm.jsx";
import KanbanBoard from "../components/KanbanBoard.jsx";
import TicketFilters from "../components/TicketFillters.jsx";
import EditTicketModal from "../components/EditTicketModel.jsx";

export default function Tickets() {
  const { projectId } = useParams();

  const [tickets, setTickets] = useState([]);
  const [filters, setFilters] = useState({});
  const [editingTicket, setEditingTicket] = useState(null);

  const loadTickets = async () => {
    if (!projectId) return;

    const res = await axios.get(
      `http://localhost:5000/api/tickets/${projectId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: filters,
      },
    );

    setTickets(res.data);
  };

  useEffect(() => {
    loadTickets();
  }, [projectId, filters]);

  return (
    <div className="p-6">
      {/* Create Ticket */}
      <TicketForm projectId={projectId} refresh={loadTickets} />

      {/* Filters */}
      <TicketFilters setFilters={setFilters} />

      {/* Kanban Board */}
      <KanbanBoard
        tickets={tickets}
        setTickets={setTickets}
        onEdit={setEditingTicket}
        refresh={loadTickets}
      />

      <h2 className="text-2xl font-bold my-4">All Tickets</h2>

      {tickets.map((t) => (
        <div
          key={t._id}
          className="border p-4 mb-3 rounded flex justify-between"
        >
          <div>
            <h3 className="font-semibold">{t.title}</h3>

            <p className="text-sm text-gray-600">
              Priority: {t.priority} | Status: {t.status}
            </p>

            <p className="text-xs text-gray-500">
              Created: {new Date(t.createdAt).toLocaleDateString()}
            </p>
          </div>

          <button
            onClick={() => setEditingTicket(t)}
            className="text-blue-600 text-sm"
          >
            Edit
          </button>
        </div>
      ))}

      {/* Edit Ticket Modal */}
      {editingTicket && (
        <EditTicketModal
          ticket={editingTicket}
          onClose={() => setEditingTicket(null)}
          refresh={loadTickets}
        />
      )}

      <button
        onClick={async () => {
          if (!window.confirm("Delete this ticket?")) return;

          await axios.delete(`http://localhost:5000/api/tickets/${t._id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });

          loadTickets();
        }}
        className="text-red-600 text-sm"
      >
        Delete
      </button>
      
    </div>
  );
}
