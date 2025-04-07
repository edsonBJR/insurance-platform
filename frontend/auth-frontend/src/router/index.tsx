import ClientesPage from "../components/pages/Clientes";
import LoginPage from "../components/pages/Login";
import PagamentosPage from "../components/pages/Pagamentos";
import SinistrosPage from "../components/pages/Sinistros";
import DashboardLayout from "../layout/DashboardLayout";
import { Routes, Route } from "react-router-dom";


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<DashboardLayout />}>
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/sinistros" element={<SinistrosPage />} />
        <Route path="/pagamentos" element={<PagamentosPage />} />
      </Route>
    </Routes>
  );
}