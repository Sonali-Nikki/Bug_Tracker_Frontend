import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";

export default function DashboardLayout({
  children,
  projects,
  activeProject,
  setActiveProject
}) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 min-h-screen">
        <Topbar
          projects={projects || []}
          activeProject={activeProject}
          setActive={setActiveProject}
        />

        <main className="p-6 bg-gray-50 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
