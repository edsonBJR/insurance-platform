import { useParams } from "react-router-dom";
import { mockApolices } from "../../mocks/mockApolices";

export default function DetalhesApolice() {
  const { id } = useParams<{ id: string }>();
  const apolice = mockApolices.find(a => a.id === id);

  if (!apolice) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Apólice</h1>
        <p>Apólice não encontrada.</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Detalhes da Apólice</h1>

      <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <div>
          <p className="text-sm text-gray-500">Número da Apólice</p>
          <p className="text-lg font-semibold">{apolice.id}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Produto</p>
          <p className="text-lg">{apolice.produto}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Valor Segurado</p>
          <p className="text-lg">R$ {apolice.valorSegurado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Início da Vigência</p>
          <p className="text-lg">{new Date(apolice.inicioVigencia).toLocaleDateString('pt-BR')}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Fim da Vigência</p>
          <p className="text-lg">{new Date(apolice.fimVigencia).toLocaleDateString('pt-BR')}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Status</p>
          <p className="text-lg font-bold">{apolice.status}</p>
        </div>
      </div>
    </div>
  );
}
