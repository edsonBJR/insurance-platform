export type SinistroStatus = "Aberto" | "Em análise" | "Concluído" | "Recusado";

export interface Sinistro {
  id: string;
  clienteId: string;
  tipo: string;
  descricao: string;
  data: string;
  status: SinistroStatus;
}

const statusOptions: SinistroStatus[] = ["Aberto", "Em análise", "Concluído", "Recusado"];
const tipoOptions = ["Colisão", "Roubo", "Incêndio", "Danos a Terceiros"];
const descricaoOptions = ["veículo", "residência", "equipamento", "outro bem"];

export const mockSinistros: Sinistro[] = Array.from({ length: 25 }, (_, i) => ({
  id: `S${1000 + i}`,
  clienteId: `CL${Math.floor(Math.random() * 50) + 1}`,
  tipo: tipoOptions[i % tipoOptions.length],
  descricao: `Sinistro relacionado a ${descricaoOptions[i % descricaoOptions.length]}`,
  data: new Date(Date.now() - i * 86400000).toISOString().split("T")[0],
  status: statusOptions[i % statusOptions.length],
}));