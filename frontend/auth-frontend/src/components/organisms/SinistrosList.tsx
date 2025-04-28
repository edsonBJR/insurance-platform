import { mockSinistros } from "../../mocks/mockSinistros";
import { mockApolices } from "../../mocks/mockApolices";
import { Link } from "react-router-dom";
import { formatDistanceStrict, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import React from "react";

const SinistrosList: React.FC = () => {
  const calcularSLA = (dataAbertura: string, dataConclusao: string | null) => {
    const inicio = parseISO(dataAbertura);
    const fim = dataConclusao ? parseISO(dataConclusao) : new Date();
    const diffDays = Math.floor((fim.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24));
    return `${diffDays} dias`;
  };

  const buscarStatusApolice = (apoliceId: string) => {
    const apolice = mockApolices.find(a => a.id === apoliceId);
    return apolice ? apolice.status : "Não encontrado";
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Sinistros</h2>
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Cliente ID</th>
              <th className="px-4 py-2 text-left">Tipo</th>
              <th className="px-4 py-2 text-left">Descrição</th>
              <th className="px-4 py-2 text-left">Apólice</th> {/* NOVO */}
              <th className="px-4 py-2 text-left">SLA</th>      {/* NOVO */}
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockSinistros.map((sinistro) => (
              <tr key={sinistro.id} className="border-t">
                <td className="px-4 py-2">{sinistro.id}</td>
                <td className="px-4 py-2">{sinistro.clienteId}</td>
                <td className="px-4 py-2">{sinistro.tipo}</td>
                <td className="px-4 py-2">{sinistro.descricao}</td>

                {/* Nova coluna Apólice */}
                <td className="px-4 py-2">
                  <Link
                    to={`/apolices/${sinistro.apoliceId}`}
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    {sinistro.apoliceId} ({buscarStatusApolice(sinistro.apoliceId)})
                  </Link>
                </td>

                {/* Nova coluna SLA */}
                <td className="px-4 py-2">
                  {calcularSLA(sinistro.dataAbertura, sinistro.dataConclusao)}
                </td>

                <td className="px-4 py-2">{sinistro.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SinistrosList;