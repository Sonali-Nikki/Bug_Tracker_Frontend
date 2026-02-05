import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Projects from "./pages/Projects.jsx";
import Tickets from "./pages/Ticket.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Navigate to="/login" />} />
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard / Projects */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Projects />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Tickets (per project) */}
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Tickets />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
