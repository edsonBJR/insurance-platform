import { Users, FileText, DollarSign, Activity } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockClientes } from "../../mocks/mockClients";
import { mockSinistros } from "../../mocks/mockSinistros";
import { mockPagamentos } from "../../mocks/mockPagamentos";
import { mockApolices } from "../../mocks/mockApolices";
import { mockCotacoes } from "../../mocks/mockCotacoes";
import { mockComissoes } from "../../mocks/mockComissoes";
import { mockTarefas } from "../../mocks/mockTarefas";
import { Card, CardContent } from "../ui/Card";
import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

export default function DashboardPage() {
  const [totalClientes, setTotalClientes] = useState(0);
  const [totalSinistros, setTotalSinistros] = useState(0);
  const [totalPagamentos, setTotalPagamentos] = useState(0);
  const [totalReceita, setTotalReceita] = useState(0);
  const [usuariosAtivos, setUsuariosAtivos] = useState(0);
  const [totalApolices, setTotalApolices] = useState(0);
  const [totalCotacoes, setTotalCotacoes] = useState(0);
  const [totalComissoes, setTotalComissoes] = useState(0);
  const [totalTarefas, setTotalTarefas] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setTotalClientes(mockClientes.length);
    setTotalSinistros(mockSinistros.length);
    setTotalPagamentos(mockPagamentos.length);
    setTotalReceita(
      mockPagamentos.reduce((acc, pagamento) => acc + pagamento.valor, 0)
    );
    setUsuariosAtivos(mockClientes.filter(c => c.status === 'Ativo').length);
  }, []);

  useEffect(() => {
    setTotalClientes(mockClientes.length);
    setTotalSinistros(mockSinistros.length);
    setTotalPagamentos(mockPagamentos.length);
    setTotalReceita(
      mockPagamentos.reduce((acc, pagamento) => acc + pagamento.valor, 0)
    );
    setUsuariosAtivos(mockClientes.filter(c => c.status === 'Ativo').length);
  
    // Novos totais
    setTotalApolices(mockApolices.length);
    setTotalCotacoes(mockCotacoes.length);
    setTotalComissoes(mockComissoes.length);
    setTotalTarefas(mockTarefas.length);
  }, []);

  const sinistrosStatusData = [
    { name: 'Abertos', value: mockSinistros.filter(s => s.status === 'Aberto').length },
    { name: 'Concluídos', value: mockSinistros.filter(s => s.status === 'Concluído').length },
  ];

  const pagamentosStatusData = [
    { name: 'Pendentes', value: mockPagamentos.filter(p => p.status === 'Pendente').length },
    { name: 'Pagos', value: mockPagamentos.filter(p => p.status === 'Pago').length },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card onClick={() => navigate("/clientes")} className="bg-white rounded-2xl shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-gray-500">Clientes</p>
              <p className="text-2xl font-bold text-gray-800">{totalClientes}</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </CardContent>
        </Card>

        <Card onClick={() => navigate("/sinistros")} className="bg-white rounded-2xl shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-gray-500">Sinistros</p>
              <p className="text-2xl font-bold text-gray-800">{totalSinistros}</p>
            </div>
            <FileText className="h-8 w-8 text-yellow-500" />
          </CardContent>
        </Card>

        <Card onClick={() => navigate("/pagamentos")} className="bg-white rounded-2xl shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-gray-500">Pagamentos</p>
              <p className="text-2xl font-bold text-gray-800">{totalPagamentos}</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-500" />
          </CardContent>
        </Card>

        <Card className="bg-white rounded-2xl shadow-md border border-gray-200">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-gray-500">Receita</p>
              <p className="text-2xl font-bold text-gray-800">
                R$ {totalReceita.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <DollarSign className="h-8 w-8 text-purple-500" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card onClick={() => navigate("/apolices")} className="bg-white rounded-2xl shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-gray-500">Apólices</p>
              <p className="text-2xl font-bold text-gray-800">{totalApolices}</p>
            </div>
            <FileText className="h-8 w-8 text-indigo-500" />
          </CardContent>
        </Card>

        <Card onClick={() => navigate("/cotacoes")} className="bg-white rounded-2xl shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-gray-500">Cotações</p>
              <p className="text-2xl font-bold text-gray-800">{totalCotacoes}</p>
            </div>
            <FileText className="h-8 w-8 text-teal-500" />
          </CardContent>
        </Card>

        <Card onClick={() => navigate("/comissoes")} className="bg-white rounded-2xl shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-gray-500">Comissões</p>
              <p className="text-2xl font-bold text-gray-800">{totalComissoes}</p>
            </div>
            <DollarSign className="h-8 w-8 text-orange-500" />
          </CardContent>
        </Card>

        <Card onClick={() => navigate("/tarefas")} className="bg-white rounded-2xl shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-gray-500">Tarefas</p>
              <p className="text-2xl font-bold text-gray-800">{totalTarefas}</p>
            </div>
            <Activity className="h-8 w-8 text-pink-500" />
          </CardContent>
        </Card>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-white rounded-2xl shadow-md border border-gray-200">
          <CardContent className="p-4">
            <h2 className="text-md font-semibold text-gray-700 mb-2">Status dos Sinistros</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={sinistrosStatusData} layout="vertical" margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" hide />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#60a5fa" barSize={30} radius={[10, 10, 10, 10]} name="Sinistros" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-2xl shadow-md border border-gray-200">
          <CardContent className="p-4">
            <h2 className="text-md font-semibold text-gray-700 mb-2">Status dos Pagamentos</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={pagamentosStatusData} layout="vertical" margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" hide />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#22c55e" barSize={30} radius={[10, 10, 10, 10]} name="Pagamentos" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-2xl shadow-md border border-gray-200">
          <CardContent className="flex flex-col justify-between p-4 h-full">
            <h2 className="text-md font-semibold text-gray-700 mb-2">Usuários Ativos</h2>
            <div className="flex flex-col items-center justify-center h-full">
              <Activity className="h-16 w-16 text-blue-600 mb-2" />
              <p className="text-2xl font-bold text-gray-800">{usuariosAtivos}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}