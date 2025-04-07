export type PagamentoStatus = "Pago" | "Pendente" | "Atrasado";
export type MetodoPagamento = "Cartão" | "Boleto" | "PIX";

export interface Pagamento {
  id: string;
  clienteId: string;
  valor: number;
  dataPagamento: string;
  status: PagamentoStatus;
  metodo: MetodoPagamento;
}

const statusOptions: PagamentoStatus[] = ["Pago", "Pendente", "Atrasado"];
const metodoOptions: MetodoPagamento[] = ["Cartão", "Boleto", "PIX"];

export const mockPagamentos: Pagamento[] = Array.from({ length: 25 }, (_, i) => ({
  id: `P${2000 + i}`,
  clienteId: `CL${Math.floor(Math.random() * 50) + 1}`,
  valor: parseFloat((Math.random() * 1000 + 100).toFixed(2)),
  dataPagamento: new Date(Date.now() - i * 86400000).toISOString().split("T")[0],
  status: statusOptions[i % 3],
  metodo: metodoOptions[i % 3],
}));