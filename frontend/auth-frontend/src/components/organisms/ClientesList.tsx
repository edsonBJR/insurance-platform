import ClientEditModal from "../molecules/ClientEditModal";
import { Cliente, mockClientes } from "../../mocks/mockClients";
import React, { useState } from "react";

const ITEMS_PER_PAGE = 25;

const ClientesList: React.FC = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(mockClientes.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = mockClientes.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const [clientes, setClientes] = useState(mockClientes);
  const [selectedCliente, setSelectedCliente] = useState<Cliente | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (cliente: Cliente) => {
    setSelectedCliente(cliente);
    setIsModalOpen(true);
  };

  const handleSave = (clienteAtualizado: Cliente) => {
    const atualizados = clientes.map((c) =>
      c.id === clienteAtualizado.id ? clienteAtualizado : c
    );
    setClientes(atualizados);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Clientes</h2>
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Nome</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Telefone</th>
              <th className="px-4 py-2 text-left">CPF</th>
              <th className="px-4 py-2 text-left">Endereço</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((cliente: Cliente) => (
              <tr key={cliente.id} className="hover:bg-gray-50 cursor-pointer"
                onClick={() => handleRowClick(cliente)}>
                <td className="px-4 py-2">{cliente.id}</td>
                <td className="px-4 py-2">{cliente.nome}</td>
                <td className="px-4 py-2">{cliente.email}</td>
                <td className="px-4 py-2">{cliente.telefone}</td>
                <td className="px-4 py-2">{cliente.cpf}</td>
                <td className="px-4 py-2">{cliente.endereco}</td>
                <td className="px-4 py-2">{cliente.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ClientEditModal
          cliente={selectedCliente}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
        <div className="flex justify-between items-center mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Anterior
          </button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Próxima
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientesList;