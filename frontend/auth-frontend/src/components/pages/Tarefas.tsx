import { mockTarefas } from "../../mocks/mockTarefas";

export default function Tarefas() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tarefas Pendentes</h1>
      <ul className="space-y-4">
        {mockTarefas.map((tarefa) => (
          <li key={tarefa.id} className="border p-4 rounded shadow">
            <h2 className="font-semibold">{tarefa.titulo}</h2>
            <p>{tarefa.descricao}</p>
            <p className="text-sm text-gray-500">Data: {tarefa.data}</p>
            <p className="text-sm text-gray-700">Status: {tarefa.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
