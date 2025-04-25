export type StatusTarefa = "Pendente" | "Concluída" | "Atrasada";

export interface Tarefa {
  id: string;
  clienteId: string;
  titulo: string;
  descricao: string;
  data: string;
  status: StatusTarefa;
}

export const mockTarefas: Tarefa[] = [
  {
    id: "TA1",
    clienteId: "CL1",
    titulo: "Renovação Pendente",
    descricao: "Neque provident aliquid dolorem enim aspernatur.",
    data: "2025-04-16",
    status: "Pendente"
  },
  {
    id: "TA2",
    clienteId: "CL2",
    titulo: "Renovação Pendente",
    descricao: "Fugit iste rerum cum.",
    data: "2025-04-28",
    status: "Concluída"
  },
  {
    id: "TA3",
    clienteId: "CL3",
    titulo: "Documentação Faltante",
    descricao: "Pariatur praesentium placeat architecto odio.",
    data: "2025-05-15",
    status: "Concluída"
  },
  {
    id: "TA4",
    clienteId: "CL4",
    titulo: "Renovação Pendente",
    descricao: "Cum fugit voluptatibus odit nam.",
    data: "2025-04-25",
    status: "Pendente"
  },
  {
    id: "TA5",
    clienteId: "CL5",
    titulo: "Contato com Cliente",
    descricao: "Dolorem adipisci et eaque.",
    data: "2025-04-14",
    status: "Pendente"
  },
  {
    id: "TA6",
    clienteId: "CL6",
    titulo: "Documentação Faltante",
    descricao: "Soluta et omnis id totam itaque eaque.",
    data: "2025-04-17",
    status: "Concluída"
  },
  {
    id: "TA7",
    clienteId: "CL7",
    titulo: "Documentação Faltante",
    descricao: "Molestiae quia incidunt nesciunt facere voluptatum consequuntur.",
    data: "2025-05-11",
    status: "Pendente"
  },
  {
    id: "TA8",
    clienteId: "CL8",
    titulo: "Contato com Cliente",
    descricao: "Quidem similique corrupti cum.",
    data: "2025-05-04",
    status: "Pendente"
  },
  {
    id: "TA9",
    clienteId: "CL9",
    titulo: "Cotação Expirada",
    descricao: "Aperiam fugit voluptatum minus voluptas similique accusamus quam.",
    data: "2025-05-16",
    status: "Atrasada"
  },
  {
    id: "TA10",
    clienteId: "CL10",
    titulo: "Contato com Cliente",
    descricao: "Quisquam excepturi eos culpa a.",
    data: "2025-04-19",
    status: "Atrasada"
  },
  {
    id: "TA11",
    clienteId: "CL11",
    titulo: "Documentação Faltante",
    descricao: "Quis magni autem numquam sapiente magni dicta.",
    data: "2025-04-30",
    status: "Atrasada"
  },
  {
    id: "TA12",
    clienteId: "CL12",
    titulo: "Documentação Faltante",
    descricao: "Molestiae quod minus a.",
    data: "2025-04-25",
    status: "Concluída"
  },
  {
    id: "TA13",
    clienteId: "CL13",
    titulo: "Cotação Expirada",
    descricao: "Accusantium ut soluta rerum esse animi soluta.",
    data: "2025-04-01",
    status: "Pendente"
  },
  {
    id: "TA14",
    clienteId: "CL14",
    titulo: "Documentação Faltante",
    descricao: "Quasi repellendus voluptate minus.",
    data: "2025-04-06",
    status: "Pendente"
  },
  {
    id: "TA15",
    clienteId: "CL15",
    titulo: "Renovação Pendente",
    descricao: "Optio veniam cumque minus.",
    data: "2025-05-22",
    status: "Pendente"
  },
  {
    id: "TA16",
    clienteId: "CL16",
    titulo: "Cotação Expirada",
    descricao: "Vitae ut quidem porro quae id.",
    data: "2025-04-30",
    status: "Atrasada"
  },
  {
    id: "TA17",
    clienteId: "CL17",
    titulo: "Cotação Expirada",
    descricao: "Tempore iste dolorum aperiam accusantium mollitia.",
    data: "2025-05-21",
    status: "Atrasada"
  },
  {
    id: "TA18",
    clienteId: "CL18",
    titulo: "Documentação Faltante",
    descricao: "Ab provident animi architecto adipisci.",
    data: "2025-04-26",
    status: "Atrasada"
  },
  {
    id: "TA19",
    clienteId: "CL19",
    titulo: "Renovação Pendente",
    descricao: "Maiores eius laborum molestiae.",
    data: "2025-05-19",
    status: "Concluída"
  },
  {
    id: "TA20",
    clienteId: "CL20",
    titulo: "Documentação Faltante",
    descricao: "Labore quos rem deleniti atque inventore incidunt.",
    data: "2025-05-09",
    status: "Atrasada"
  },
  {
    id: "TA21",
    clienteId: "CL21",
    titulo: "Documentação Faltante",
    descricao: "Perferendis voluptates atque.",
    data: "2025-05-03",
    status: "Atrasada"
  },
  {
    id: "TA22",
    clienteId: "CL22",
    titulo: "Contato com Cliente",
    descricao: "Reiciendis autem deleniti modi consequuntur delectus.",
    data: "2025-05-08",
    status: "Atrasada"
  },
  {
    id: "TA23",
    clienteId: "CL23",
    titulo: "Renovação Pendente",
    descricao: "Soluta asperiores repellat sequi atque.",
    data: "2025-05-16",
    status: "Atrasada"
  },
  {
    id: "TA24",
    clienteId: "CL24",
    titulo: "Renovação Pendente",
    descricao: "Voluptas unde sed.",
    data: "2025-04-10",
    status: "Atrasada"
  },
  {
    id: "TA25",
    clienteId: "CL25",
    titulo: "Contato com Cliente",
    descricao: "Laborum distinctio id animi fugiat voluptates.",
    data: "2025-04-19",
    status: "Atrasada"
  }
];