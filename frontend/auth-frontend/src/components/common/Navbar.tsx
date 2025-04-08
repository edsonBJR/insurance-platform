import { useAuth } from "../../context/AuthContext";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm">
      <h1 className="text-xl font-semibold text-gray-800">Sistema de Seguros</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Olá, {user?.username || "Usuário"}</span>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
        >
          <LogOut size={16} />
          Sair
        </button>
      </div>
    </nav>
  );
}