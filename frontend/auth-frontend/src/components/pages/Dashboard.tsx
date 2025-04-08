import { Users, FileText, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import { mockClientes } from "../../mocks/mockClients";
import { mockSinistros } from "../../mocks/mockSinistros";
import { mockPagamentos } from "../../mocks/mockPagamentos";
import { Card, CardContent } from "../ui/Card";

export default function DashboardPage() {
  const [totalClientes, setTotalClientes] = useState(0);
  const [totalSinistros, setTotalSinistros] = useState(0);
  const [totalPagamentos, setTotalPagamentos] = useState(0);
  const [totalReceita, setTotalReceita] = useState(0);

  useEffect(() => {
    setTotalClientes(mockClientes.length);
    setTotalSinistros(mockSinistros.length);
    setTotalPagamentos(mockPagamentos.length);
    setTotalReceita(
      mockPagamentos.reduce((acc, pagamento) => acc + pagamento.valor, 0)
    );
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white rounded-2xl shadow-md border border-gray-200">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-gray-500">Clientes</p>
              <p className="text-2xl font-bold text-gray-800">{totalClientes}</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </CardContent>
        </Card>

        <Card className="bg-white rounded-2xl shadow-md border border-gray-200">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-gray-500">Sinistros</p>
              <p className="text-2xl font-bold text-gray-800">{totalSinistros}</p>
            </div>
            <FileText className="h-8 w-8 text-yellow-500" />
          </CardContent>
        </Card>

        <Card className="bg-white rounded-2xl shadow-md border border-gray-200">
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
    </div>
  );
}