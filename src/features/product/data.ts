export interface Product {
  id: number;
  supplierCode: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
}

export const productList: Product[] = [
  {
    id: 1,
    supplierCode: "ROY",
    name: "CORREIA IND. REXON BORRACHA 1890 S14M 85mm",
    description: `Correia e polia sincronizadora de passo 14M (para acionamento extra pesado Ex.: máquina-ferramenta pesada, trituradores, etc.)`,
    imageUrl:
      "https://s3-sa-east-1.amazonaws.com/loja2/aaf0f616deee9955bd844bc8a282dbff.jpg",
    category: "correias-industriais",
  },
  {
    id: 2,
    supplierCode: "ROY",
    name: "Correia 14M 1190 55mm de Largura (1190 14M) Sincronizadora Optibelt Omega",
    description: `Informações técnicas:
Correia Sincronizadora 14M 1190
Largura: 55mm
Numero de dentes: 85
Correia 1190 14M HTD
Perfil do dente: 14M (14.00mm)
Consulte outras medidas.
Correia sincronizadora de passo 14M (para acionamento extra pesado Ex.: máquina-ferramenta pesada, trituradores, etc.).
`,
    imageUrl:
      "https://s3-sa-east-1.amazonaws.com/loja2/063c33206f6d23a37adfd61ef7e52c9b.jpg",
    category: "correias-industriais",
  },
  {
    id: 3,
    supplierCode: "ROY",
    name: "Carregador de Bateria CBF12-50B",
    description: `Para carregar baterias até 150 amperes e auxilia a
partida em carros de passeio e utilitários.`,
    imageUrl:
      "https://s3-sa-east-1.amazonaws.com/loja2/fda1a7949b9d40b5a3d7a1648c5c0081.jpg",
    category: "maquinas-e-equipamentos",
  },
];
