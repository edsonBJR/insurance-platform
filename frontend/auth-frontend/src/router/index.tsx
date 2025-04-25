import DashboardPage from "../components/pages/Dashboard";
import ClientesPage from "../components/pages/Clientes";
import LoginPage from "../components/pages/Login";
import PagamentosPage from "../components/pages/Pagamentos";
import SinistrosPage from "../components/pages/Sinistros";
import DashboardLayout from "../layout/DashboardLayout";
import { Routes, Route } from "react-router-dom";
import Apolices from "../components/pages/Apolices";
import Comissoes from "../components/pages/Comissoes";
import Tarefas from "../components/pages/Tarefas";
import Cotacoes from "../components/pages/Cotacoes";
import Perfil from "../components/pages/Tarefas";


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/sinistros" element={<SinistrosPage />} />
        <Route path="/pagamentos" element={<PagamentosPage />} />
        <Route path="/apolices" element={<Apolices />} />
        <Route path="/comissoes" element={<Comissoes />} />
        <Route path="/cotacoes" element={<Cotacoes />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>
    </Routes>
  );
}