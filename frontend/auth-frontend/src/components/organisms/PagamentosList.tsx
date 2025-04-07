import {mockPagamentos} from "../../mocks/mockPagamentos";
import React from "react";

const PagamentosList: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Pagamentos</h2>
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Cliente ID</th>
              <th className="px-4 py-2 text-left">Valor</th>
              <th className="px-4 py-2 text-left">Data Pagamento</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Metodo</th>
            </tr>
          </thead>
          <tbody>
            {mockPagamentos.map((pagamento, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{pagamento.id}</td>
                <td className="px-4 py-2">{pagamento.clienteId}</td>
                <td className="px-4 py-2">R$ {pagamento.valor}</td>
                <td className="px-4 py-2">{pagamento.dataPagamento}</td>
                <td className="px-4 py-2">{pagamento.status}</td>
                <td className="px-4 py-2">{pagamento.metodo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PagamentosList;