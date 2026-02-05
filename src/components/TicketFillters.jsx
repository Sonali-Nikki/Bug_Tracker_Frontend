export default function TicketFilters({ filters, setFilters }) {
  return (
    <div className="flex gap-3 mb-4">
      <select
        className="border p-2"
        onChange={(e) =>
          setFilters({ ...filters, status: e.target.value })
        }
      >
        <option value="">Status</option>
        <option>To Do</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>

      <select
        className="border p-2"
        onChange={(e) =>
          setFilters({ ...filters, priority: e.target.value })
        }
      >
        <option value="">Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <input
        placeholder="Search..."
        className="border p-2"
        onChange={(e) =>
          setFilters({ ...filters, search: e.target.value })
        }
      />
    </div>
  );
}
