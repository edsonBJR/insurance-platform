export type SinistroStatus = "Aberto" | "Em análise" | "Concluído" | "Recusado";

export interface Sinistro {
  id: string;
  clienteId: string;
  apoliceId: string;
  seguradoraId: string;
  tipo: string;
  descricao: string;
  dataAbertura: string;
  dataConclusao: string | null;
  status: SinistroStatus;
}

export const mockSinistros: Sinistro[] = [
  {
    id: "S1000",
    clienteId: "CL1",
    apoliceId: "AP1",
    seguradoraId: "SG1",
    tipo: "Colisão",
    descricao: "Sinistro relacionado a veículo",
    dataAbertura: "2025-02-28",
    dataConclusao: "2025-03-01",
    status: "Aberto"
  },
  {
    id: "S1001",
    clienteId: "CL2",
    apoliceId: "AP2",
    seguradoraId: "SG2",
    tipo: "Roubo",
    descricao: "Sinistro relacionado a residência",
    dataAbertura: "2024-11-17",
    dataConclusao: null,
    status: "Em análise"
  },
  {
    id: "S1002",
    clienteId: "CL3",
    apoliceId: "AP3",
    seguradoraId: "SG3",
    tipo: "Incêndio",
    descricao: "Sinistro relacionado a equipamento",
    dataAbertura: "2024-10-31",
    dataConclusao: "2024-11-08",
    status: "Concluído"
  },
  {
    id: "S1003",
    clienteId: "CL4",
    apoliceId: "AP4",
    seguradoraId: "SG4",
    tipo: "Danos a Terceiros",
    descricao: "Sinistro relacionado a outro bem",
    dataAbertura: "2025-03-19",
    dataConclusao: "2025-04-12",
    status: "Recusado"
  },
  {
    id: "S1004",
    clienteId: "CL5",
    apoliceId: "AP5",
    seguradoraId: "SG5",
    tipo: "Colisão",
    descricao: "Sinistro relacionado a veículo",
    dataAbertura: "2024-12-19",
    dataConclusao: "2025-01-10",
    status: "Aberto"
  },
  {
    id: "S1005",
    clienteId: "CL6",
    apoliceId: "AP6",
    seguradoraId: "SG1",
    tipo: "Roubo",
    descricao: "Sinistro relacionado a residência",
    dataAbertura: "2024-12-13",
    dataConclusao: "2025-01-01",
    status: "Em análise"
  },
  {
    id: "S1006",
    clienteId: "CL7",
    apoliceId: "AP7",
    seguradoraId: "SG2",
    tipo: "Incêndio",
    descricao: "Sinistro relacionado a equipamento",
    dataAbertura: "2024-12-09",
    dataConclusao: null,
    status: "Concluído"
  },
  {
    id: "S1007",
    clienteId: "CL8",
    apoliceId: "AP8",
    seguradoraId: "SG3",
    tipo: "Danos a Terceiros",
    descricao: "Sinistro relacionado a outro bem",
    dataAbertura: "2024-11-23",
    dataConclusao: "2024-11-24",
    status: "Recusado"
  },
  {
    id: "S1008",
    clienteId: "CL9",
    apoliceId: "AP9",
    seguradoraId: "SG4",
    tipo: "Colisão",
    descricao: "Sinistro relacionado a veículo",
    dataAbertura: "2025-03-19",
    dataConclusao: "2025-03-26",
    status: "Aberto"
  },
  {
    id: "S1009",
    clienteId: "CL10",
    apoliceId: "AP10",
    seguradoraId: "SG5",
    tipo: "Roubo",
    descricao: "Sinistro relacionado a residência",
    dataAbertura: "2024-11-15",
    dataConclusao: "2024-12-02",
    status: "Em análise"
  },
  {
    id: "S1010",
    clienteId: "CL11",
    apoliceId: "AP11",
    seguradoraId: "SG1",
    tipo: "Incêndio",
    descricao: "Sinistro relacionado a equipamento",
    dataAbertura: "2025-03-07",
    dataConclusao: "2025-03-25",
    status: "Concluído"
  },
  {
    id: "S1011",
    clienteId: "CL12",
    apoliceId: "AP12",
    seguradoraId: "SG2",
    tipo: "Danos a Terceiros",
    descricao: "Sinistro relacionado a outro bem",
    dataAbertura: "2025-03-19",
    dataConclusao: "2025-04-11",
    status: "Recusado"
  },
  {
    id: "S1012",
    clienteId: "CL13",
    apoliceId: "AP13",
    seguradoraId: "SG3",
    tipo: "Colisão",
    descricao: "Sinistro relacionado a veículo",
    dataAbertura: "2025-04-18",
    dataConclusao: null,
    status: "Aberto"
  },
  {
    id: "S1013",
    clienteId: "CL14",
    apoliceId: "AP14",
    seguradoraId: "SG4",
    tipo: "Roubo",
    descricao: "Sinistro relacionado a residência",
    dataAbertura: "2025-02-09",
    dataConclusao: "2025-02-24",
    status: "Em análise"
  },
  {
    id: "S1014",
    clienteId: "CL15",
    apoliceId: "AP15",
    seguradoraId: "SG5",
    tipo: "Incêndio",
    descricao: "Sinistro relacionado a equipamento",
    dataAbertura: "2024-11-12",
    dataConclusao: null,
    status: "Concluído"
  },
  {
    id: "S1015",
    clienteId: "CL16",
    apoliceId: "AP16",
    seguradoraId: "SG1",
    tipo: "Danos a Terceiros",
    descricao: "Sinistro relacionado a outro bem",
    dataAbertura: "2025-02-18",
    dataConclusao: "2025-03-15",
    status: "Recusado"
  },
  {
    id: "S1016",
    clienteId: "CL17",
    apoliceId: "AP17",
    seguradoraId: "SG2",
    tipo: "Colisão",
    descricao: "Sinistro relacionado a veículo",
    dataAbertura: "2025-01-16",
    dataConclusao: "2025-02-08",
    status: "Aberto"
  },
  {
    id: "S1017",
    clienteId: "CL18",
    apoliceId: "AP18",
    seguradoraId: "SG3",
    tipo: "Roubo",
    descricao: "Sinistro relacionado a residência",
    dataAbertura: "2024-11-02",
    dataConclusao: null,
    status: "Em análise"
  },
  {
    id: "S1018",
    clienteId: "CL19",
    apoliceId: "AP19",
    seguradoraId: "SG4",
    tipo: "Incêndio",
    descricao: "Sinistro relacionado a equipamento",
    dataAbertura: "2024-11-01",
    dataConclusao: null,
    status: "Concluído"
  },
  {
    id: "S1019",
    clienteId: "CL20",
    apoliceId: "AP20",
    seguradoraId: "SG5",
    tipo: "Danos a Terceiros",
    descricao: "Sinistro relacionado a outro bem",
    dataAbertura: "2024-11-14",
    dataConclusao: null,
    status: "Recusado"
  },
  {
    id: "S1020",
    clienteId: "CL21",
    apoliceId: "AP21",
    seguradoraId: "SG1",
    tipo: "Colisão",
    descricao: "Sinistro relacionado a veículo",
    dataAbertura: "2024-12-08",
    dataConclusao: "2024-12-15",
    status: "Aberto"
  },
  {
    id: "S1021",
    clienteId: "CL22",
    apoliceId: "AP22",
    seguradoraId: "SG2",
    tipo: "Roubo",
    descricao: "Sinistro relacionado a residência",
    dataAbertura: "2024-12-11",
    dataConclusao: null,
    status: "Em análise"
  },
  {
    id: "S1022",
    clienteId: "CL23",
    apoliceId: "AP23",
    seguradoraId: "SG3",
    tipo: "Incêndio",
    descricao: "Sinistro relacionado a equipamento",
    dataAbertura: "2025-02-02",
    dataConclusao: "2025-02-05",
    status: "Concluído"
  },
  {
    id: "S1023",
    clienteId: "CL24",
    apoliceId: "AP24",
    seguradoraId: "SG4",
    tipo: "Danos a Terceiros",
    descricao: "Sinistro relacionado a outro bem",
    dataAbertura: "2025-02-20",
    dataConclusao: null,
    status: "Recusado"
  },
  {
    id: "S1024",
    clienteId: "CL25",
    apoliceId: "AP25",
    seguradoraId: "SG5",
    tipo: "Colisão",
    descricao: "Sinistro relacionado a veículo",
    dataAbertura: "2024-11-01",
    dataConclusao: "2024-11-13",
    status: "Aberto"
  }
];