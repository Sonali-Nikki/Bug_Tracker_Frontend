import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen hidden md:block">
      <div className="p-4 text-xl font-bold border-b border-gray-700">
      🐛  Bug Tracker
      </div>

      <nav className="p-4 space-y-3">
        <Link to="/projects" className="block hover:text-blue-400">
          Projects
        </Link>
        <Link to="/dashboard" className="block hover:text-blue-400">
          Dashboard
        </Link>
      </nav>
    </aside>
  );
}
