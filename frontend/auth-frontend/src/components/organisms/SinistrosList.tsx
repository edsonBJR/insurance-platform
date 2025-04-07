import { mockSinistros } from "../../mocks/mockSinistros";
import React from "react";

const SinistrosList: React.FC = () => {
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
              <th className="px-4 py-2 text-left">Data</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockSinistros.map((sinistro, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{sinistro.id}</td>
                <td className="px-4 py-2">{sinistro.clienteId}</td>
                <td className="px-4 py-2">{sinistro.tipo}</td>
                <td className="px-4 py-2">{sinistro.descricao}</td>
                <td className="px-4 py-2">{sinistro.data}</td>
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