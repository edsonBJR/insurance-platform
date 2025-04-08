import { NavLink } from "react-router-dom";
import { Users, FileText, DollarSign, LayoutDashboard } from "lucide-react";

const menuItems = [
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/clientes", label: "Clientes", icon: Users },
  { path: "/sinistros", label: "Sinistros", icon: FileText },
  { path: "/pagamentos", label: "Pagamentos", icon: DollarSign },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-blue-900 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-blue-700">
        Admin
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-blue-700 transition ${
                isActive ? "bg-blue-800" : ""
              }`
            }
          >
            <Icon className="h-5 w-5" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}