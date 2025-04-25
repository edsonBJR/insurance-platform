export type StatusCotacao = "Aberta" | "Expirada" | "Convertida";

export interface Cotacao {
  id: string;
  clienteId: string;
  produto: string;
  valorSimulado: number;
  dataSolicitacao: string;
  status: StatusCotacao;
}

export const mockCotacoes: Cotacao[] = [
  {
    id: "CT1",
    clienteId: "CL1",
    produto: "Seguro Auto",
    valorSimulado: 1559.75,
    dataSolicitacao: "2025-04-08",
    status: "Expirada"
  },
  {
    id: "CT2",
    clienteId: "CL2",
    produto: "Seguro Vida",
    valorSimulado: 4810.38,
    dataSolicitacao: "2025-03-22",
    status: "Convertida"
  },
  {
    id: "CT3",
    clienteId: "CL3",
    produto: "Seguro Residencial",
    valorSimulado: 3002.2,
    dataSolicitacao: "2025-04-05",
    status: "Convertida"
  },
  {
    id: "CT4",
    clienteId: "CL4",
    produto: "Seguro Vida",
    valorSimulado: 5322.98,
    dataSolicitacao: "2025-04-17",
    status: "Aberta"
  },
  {
    id: "CT5",
    clienteId: "CL5",
    produto: "Seguro Residencial",
    valorSimulado: 3335.23,
    dataSolicitacao: "2025-04-11",
    status: "Convertida"
  },
  {
    id: "CT6",
    clienteId: "CL6",
    produto: "Seguro Residencial",
    valorSimulado: 6285.22,
    dataSolicitacao: "2025-03-10",
    status: "Aberta"
  },
  {
    id: "CT7",
    clienteId: "CL7",
    produto: "Seguro Auto",
    valorSimulado: 7743.85,
    dataSolicitacao: "2025-03-13",
    status: "Convertida"
  },
  {
    id: "CT8",
    clienteId: "CL8",
    produto: "Seguro Residencial",
    valorSimulado: 9225.69,
    dataSolicitacao: "2025-03-23",
    status: "Convertida"
  },
  {
    id: "CT9",
    clienteId: "CL9",
    produto: "Seguro Auto",
    valorSimulado: 5141.75,
    dataSolicitacao: "2025-03-16",
    status: "Aberta"
  },
  {
    id: "CT10",
    clienteId: "CL10",
    produto: "Seguro Auto",
    valorSimulado: 8847.86,
    dataSolicitacao: "2025-02-28",
    status: "Expirada"
  },
  {
    id: "CT11",
    clienteId: "CL11",
    produto: "Seguro Vida",
    valorSimulado: 1050.29,
    dataSolicitacao: "2025-04-20",
    status: "Convertida"
  },
  {
    id: "CT12",
    clienteId: "CL12",
    produto: "Seguro Vida",
    valorSimulado: 1313.71,
    dataSolicitacao: "2025-04-16",
    status: "Expirada"
  },
  {
    id: "CT13",
    clienteId: "CL13",
    produto: "Seguro Vida",
    valorSimulado: 9790.85,
    dataSolicitacao: "2025-02-28",
    status: "Convertida"
  },
  {
    id: "CT14",
    clienteId: "CL14",
    produto: "Seguro Vida",
    valorSimulado: 1719.72,
    dataSolicitacao: "2025-03-25",
    status: "Expirada"
  },
  {
    id: "CT15",
    clienteId: "CL15",
    produto: "Seguro Residencial",
    valorSimulado: 2068.71,
    dataSolicitacao: "2025-02-28",
    status: "Convertida"
  },
  {
    id: "CT16",
    clienteId: "CL16",
    produto: "Seguro Residencial",
    valorSimulado: 4519.81,
    dataSolicitacao: "2025-02-27",
    status: "Aberta"
  },
  {
    id: "CT17",
    clienteId: "CL17",
    produto: "Seguro Residencial",
    valorSimulado: 7675.02,
    dataSolicitacao: "2025-04-20",
    status: "Convertida"
  },
  {
    id: "CT18",
    clienteId: "CL18",
    produto: "Seguro Vida",
    valorSimulado: 7273.02,
    dataSolicitacao: "2025-04-10",
    status: "Expirada"
  },
  {
    id: "CT19",
    clienteId: "CL19",
    produto: "Seguro Residencial",
    valorSimulado: 6673.84,
    dataSolicitacao: "2025-04-12",
    status: "Expirada"
  },
  {
    id: "CT20",
    clienteId: "CL20",
    produto: "Seguro Residencial",
    valorSimulado: 4789.12,
    dataSolicitacao: "2025-04-15",
    status: "Aberta"
  },
  {
    id: "CT21",
    clienteId: "CL21",
    produto: "Seguro Vida",
    valorSimulado: 1108.25,
    dataSolicitacao: "2025-03-10",
    status: "Aberta"
  },
  {
    id: "CT22",
    clienteId: "CL22",
    produto: "Seguro Residencial",
    valorSimulado: 5762.25,
    dataSolicitacao: "2025-02-28",
    status: "Convertida"
  },
  {
    id: "CT23",
    clienteId: "CL23",
    produto: "Seguro Vida",
    valorSimulado: 568.31,
    dataSolicitacao: "2025-04-13",
    status: "Convertida"
  },
  {
    id: "CT24",
    clienteId: "CL24",
    produto: "Seguro Residencial",
    valorSimulado: 1059.3,
    dataSolicitacao: "2025-03-02",
    status: "Aberta"
  },
  {
    id: "CT25",
    clienteId: "CL25",
    produto: "Seguro Vida",
    valorSimulado: 8666.54,
    dataSolicitacao: "2025-03-13",
    status: "Aberta"
  }
];