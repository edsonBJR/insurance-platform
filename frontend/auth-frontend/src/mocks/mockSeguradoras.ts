export interface Seguradora {
    id: string;
    nome: string;
    cnpj: string;
    contato: string;
    email: string;
  }
  
  export const mockSeguradoras: Seguradora[] = [
    {
      id: "SG1",
      nome: "Seguradora Atlas",
      cnpj: "54.718.370/1711-68",
      contato: "84 3863-7940",
      email: "contato@seguradoraatlas.com"
    },
    {
      id: "SG2",
      nome: "Seguradora Ômega",
      cnpj: "78.227.487/2291-80",
      contato: "+55 (031) 6542-3511",
      email: "contato@seguradoraômega.com"
    },
    {
      id: "SG3",
      nome: "Seguradora Phoenix",
      cnpj: "47.949.743/6925-83",
      contato: "41 1559 4078",
      email: "contato@seguradoraphoenix.com"
    },
    {
      id: "SG4",
      nome: "Seguradora Aurora",
      cnpj: "34.821.171/1750-94",
      contato: "+55 71 6184 9593",
      email: "contato@seguradoraaurora.com"
    },
    {
      id: "SG5",
      nome: "Seguradora Zenith",
      cnpj: "39.891.396/2307-39",
      contato: "+55 (084) 0341 3164",
      email: "contato@seguradorazenith.com"
    }
  ];