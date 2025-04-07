import { Cliente } from "mocks/mockClients";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

interface ClientEditModalProps {
  cliente: Cliente | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (clienteAtualizado: Cliente) => void;
}

export default function ClientEditModal({
  cliente,
  isOpen,
  onClose,
  onSave,
}: ClientEditModalProps) {
  const { register, handleSubmit, reset } = useForm<Cliente>();

  useEffect(() => {
    if (cliente) {
      reset(cliente);
    }
  }, [cliente, reset]);

  if (!isOpen || !cliente) return null;

  const handleSave = (data: Cliente) => {
    onSave({ ...cliente, ...data });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h3 className="text-xl font-bold mb-4">Editar Cliente</h3>
        <form onSubmit={handleSubmit(handleSave)} className="space-y-4">
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            {...register("nome")}
            placeholder="Nome"
          />
          <input
            type="email"
            className="w-full border rounded px-3 py-2"
            {...register("email")}
            placeholder="Email"
          />
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            {...register("telefone")}
            placeholder="Telefone"
          />
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            {...register("endereco")}
            placeholder="Endereço"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-400 text-white rounded"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}