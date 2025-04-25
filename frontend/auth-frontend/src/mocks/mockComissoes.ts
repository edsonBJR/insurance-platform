export type StatusComissao = "Paga" | "Pendente" | "Atrasada";

export interface Comissao {
  id: string;
  clienteId: string;
  mes: string;
  valor: number;
  status: StatusComissao;
}

export const mockComissoes: Comissao[] = [
  {
    id: "CM1",
    clienteId: "CL1",
    mes: "06/2024",
    valor: 734.11,
    status: "Paga",
  },
  {
    id: "CM2",
    clienteId: "CL2",
    mes: "05/2024",
    valor: 141.24,
    status: "Pendente",
  },
  {
    id: "CM3",
    clienteId: "CL3",
    mes: "09/2024",
    valor: 305.11,
    status: "Atrasada",
  },
  {
    id: "CM4",
    clienteId: "CL4",
    mes: "05/2024",
    valor: 360.45,
    status: "Paga",
  },
  {
    id: "CM5",
    clienteId: "CL5",
    mes: "09/2024",
    valor: 171.81,
    status: "Pendente",
  },
  {
    id: "CM6",
    clienteId: "CL6",
    mes: "03/2025",
    valor: 309.51,
    status: "Atrasada",
  },
  {
    id: "CM7",
    clienteId: "CL7",
    mes: "09/2024",
    valor: 190.9,
    status: "Paga",
  },
  {
    id: "CM8",
    clienteId: "CL8",
    mes: "12/2024",
    valor: 350.18,
    status: "Pendente",
  },
  {
    id: "CM9",
    clienteId: "CL9",
    mes: "08/2024",
    valor: 672.12,
    status: "Atrasada",
  },
  {
    id: "CM10",
    clienteId: "CL10",
    mes: "03/2025",
    valor: 428.35,
    status: "Paga",
  },
  {
    id: "CM11",
    clienteId: "CL11",
    mes: "05/2024",
    valor: 433.16,
    status: "Pendente",
  },
  {
    id: "CM12",
    clienteId: "CL12",
    mes: "02/2025",
    valor: 288.56,
    status: "Atrasada",
  },
  {
    id: "CM13",
    clienteId: "CL13",
    mes: "10/2024",
    valor: 340.28,
    status: "Paga",
  },
  {
    id: "CM14",
    clienteId: "CL14",
    mes: "11/2024",
    valor: 942.99,
    status: "Pendente",
  },
  {
    id: "CM15",
    clienteId: "CL15",
    mes: "06/2024",
    valor: 683.23,
    status: "Atrasada",
  },
  {
    id: "CM16",
    clienteId: "CL16",
    mes: "04/2025",
    valor: 648.22,
    status: "Paga",
  },
  {
    id: "CM17",
    clienteId: "CL17",
    mes: "09/2024",
    valor: 254.02,
    status: "Pendente",
  },
  {
    id: "CM18",
    clienteId: "CL18",
    mes: "05/2024",
    valor: 756.21,
    status: "Atrasada",
  },
  {
    id: "CM19",
    clienteId: "CL19",
    mes: "11/2024",
    valor: 247.06,
    status: "Paga",
  },
  {
    id: "CM20",
    clienteId: "CL20",
    mes: "08/2024",
    valor: 441.51,
    status: "Pendente",
  },
  {
    id: "CM21",
    clienteId: "CL21",
    mes: "03/2025",
    valor: 990.57,
    status: "Atrasada",
  },
  {
    id: "CM22",
    clienteId: "CL22",
    mes: "12/2024",
    valor: 676.0,
    status: "Paga",
  },
  {
    id: "CM23",
    clienteId: "CL23",
    mes: "12/2024",
    valor: 601.25,
    status: "Pendente",
  },
  {
    id: "CM24",
    clienteId: "CL24",
    mes: "04/2025",
    valor: 716.15,
    status: "Atrasada",
  },
  {
    id: "CM25",
    clienteId: "CL25",
    mes: "03/2025",
    valor: 858.57,
    status: "Paga",
  }
];