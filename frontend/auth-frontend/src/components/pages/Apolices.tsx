import { mockApolices } from "../../mocks/mockApolices";

export default function Apolices() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Apólices</h1>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Produto</th>
            <th>Valor Segurado</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mockApolices.map((apolice) => (
            <tr key={apolice.id}>
              <td>{apolice.id}</td>
              <td>{apolice.clienteId}</td>
              <td>{apolice.produto}</td>
              <td>R$ {apolice.valorSegurado.toFixed(2)}</td>
              <td>{apolice.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
