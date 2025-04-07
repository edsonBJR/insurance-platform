export type StatusCliente = "Ativo" | "Inativo" | "Pendente";

export interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  endereco: string;
  status: StatusCliente;
}

const statusOptions: StatusCliente[] = ["Ativo", "Inativo", "Pendente"];

export const mockClientes: Cliente[] = Array.from({ length: 50 }, (_, i) => ({
  id: `CL${i + 1}`,
  nome: `Cliente ${i + 1}`,
  email: `cliente${i + 1}@email.com`,
  telefone: `(11) 90000-00${(i + 1).toString().padStart(2, "0")}`,
  cpf: `${Math.floor(10000000000 + Math.random() * 89999999999)}`,
  endereco: `Rua Exemplo ${i + 1}, Bairro ${i % 5}, Cidade ${i % 3}`,
  status: statusOptions[i % statusOptions.length],
}));