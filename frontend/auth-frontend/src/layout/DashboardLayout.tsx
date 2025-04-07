import { ReactNode } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { LogOut } from "lucide-react";

const menuItems = [
  { label: "Clientes", path: "/clientes" },
  { label: "Sinistros", path: "/sinistros" },
  { label: "Pagamentos", path: "/pagamentos" },
];

export default function DashboardLayout() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-8">Insurance Dashboard</h2>
        <nav className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg hover:underline ${
                isActive(item.path) ? "font-bold underline" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto">
          <button className="flex items-center gap-2 text-sm text-red-300 hover:text-red-500">
            <LogOut size={18} />
            Sair
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
}
