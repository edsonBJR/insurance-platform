export default function Perfil() {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Perfil do Corretor</h1>
        <form className="flex flex-col gap-4">
          <input className="border p-2" placeholder="Nome" />
          <input className="border p-2" placeholder="E-mail" />
          <input className="border p-2" placeholder="Telefone" />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Salvar
          </button>
        </form>
      </div>
    );
  }
  