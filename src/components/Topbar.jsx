export default function Topbar({ projects, activeProject, setActive }) {
  return (
    <header className="h-14 border-b flex items-center px-4 justify-between">
      <select
        className="border p-2 rounded"
        value={activeProject?._id || ""}
        onChange={(e) =>
          setActive(projects.find(p => p._id === e.target.value))
        }
      >
        <option value="">Select Project</option>
        {projects.map((p) => (
          <option key={p._id} value={p._id}>
            {p.title}
          </option>
        ))}
      </select>

      <span className="text-sm text-gray-500">
        Logged in
      </span>
    </header>
  );
}
