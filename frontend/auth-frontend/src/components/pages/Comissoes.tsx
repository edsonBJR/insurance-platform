import { mockComissoes } from "../../mocks/mockComissoes";

export default function Comissoes() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Comissões</h1>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Mês</th>
            <th>Valor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mockComissoes.map((comissao) => (
            <tr key={comissao.id}>
              <td>{comissao.id}</td>
              <td>{comissao.clienteId}</td>
              <td>{comissao.mes}</td>
              <td>R$ {comissao.valor.toFixed(2)}</td>
              <td>{comissao.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
