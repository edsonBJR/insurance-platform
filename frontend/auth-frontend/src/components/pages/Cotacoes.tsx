import { mockCotacoes } from "../../mocks/mockCotacoes";

export default function Cotacoes() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cotações</h1>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Produto</th>
            <th>Valor Simulado</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mockCotacoes.map((cotacao) => (
            <tr key={cotacao.id}>
              <td>{cotacao.id}</td>
              <td>{cotacao.clienteId}</td>
              <td>{cotacao.produto}</td>
              <td>R$ {cotacao.valorSimulado.toFixed(2)}</td>
              <td>{cotacao.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
