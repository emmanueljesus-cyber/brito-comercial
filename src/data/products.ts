export interface Product {
  id: number
  name: string
  image: string
  link?: string
  category?: string
  categorySlug?: string
  description?: string
}

// ── Mais Vendidos ─────────────────────────────────────────────────────────────
export const maisVendidos: Product[] = [
  {
    id: 943,
    name: 'Caixa de Som JBL PARTYBOX 1000 com Bluetooth e Efeitos de Luzes Preto',
    image: '/wp-content/uploads/2023/12/caixa-de-som-portatil-para-festas-com-bluetooth-e-efeitos-de-luzes-preto-103459-1612471927-2-1-1-300x300.jpg',
    category: 'Eletrônicos',
    categorySlug: 'eletronicos',
    description: 'Caixa de Som JBL PARTYBOX 1000 com Bluetooth, efeitos de luzes e microfone sem fio. Potência de 1100W para festas inesquecíveis.',
  },
  {
    id: 909,
    name: 'Liquidificador Trapèze Cadence com filtro LIQ347 1,5 Litros 4 Velocidade + Pulsa 350W',
    image: '/wp-content/uploads/2023/12/transferir-9-1-300x300.webp',
    category: 'Eletrodomésticos',
    categorySlug: 'eletrodomesticos',
    description: 'Liquidificador com filtro removível, 1,5 litros, 4 velocidades + pulsa. 350W de potência e design elegante.',
  },
  {
    id: 1491,
    name: 'Registro Esfera Viqua Soldavel 110MM Predial Marrom',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898010801846_1-300x300.webp',
    category: 'Hidráulico',
    categorySlug: 'hidraulico',
    description: 'Registro Esfera Viqua soldável 110MM para uso predial. Alta resistência e durabilidade.',
  },
  {
    id: 1353,
    name: 'Revestimento Incenor Milagres Brilhante PSI-63110R 63x63 Tipo A',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7908576600439_1-300x300.jpg',
    category: 'Pisos e Revestimentos',
    categorySlug: 'pisos-e-revestimentos',
    description: 'Revestimento cerâmico brilhante 63x63cm Tipo A. Alta qualidade e acabamento premium para sua residência.',
  },
  {
    id: 832,
    name: 'ARAME RECOZIDO 18 – 1 KG',
    image: '/wp-content/uploads/2023/12/thumb_400-400-arame-recozido-2-vergalhao-aco-1-300x300-1.webp',
    category: 'Material de Construção',
    categorySlug: 'material-de-construcao',
    description: 'Arame recozido bitola 18, embalagem de 1kg. Ideal para amarração de ferragens na construção civil.',
  },
  {
    id: 1359,
    name: 'Revestimento Cerâmico 3D Brilhante Cadiz Branco Tipo A 37X59CM',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7899719802011_1-300x300.webp',
    category: 'Pisos e Revestimentos',
    categorySlug: 'pisos-e-revestimentos',
    description: 'Revestimento cerâmico 3D brilhante 37x59cm Tipo A. Design moderno com efeito tridimensional.',
  },
  {
    id: 1226,
    name: 'Telha em Pvc Colonial Cerâmica 1,97x0,86M',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898187882945_1-300x300.webp',
    category: 'Telhas',
    categorySlug: 'telhas',
    description: 'Telha PVC Colonial cor cerâmica, medindo 1,97x0,86m. Resistente ao calor e chuva.',
  },
  {
    id: 1294,
    name: 'Chuveiro Elétrico com Resistência Blindada Super Ducha Branco 4400W 220V',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7896039799953_1-300x300.webp',
    category: 'Banheiro',
    categorySlug: 'banheiro',
    description: 'Chuveiro elétrico Super Ducha com resistência blindada, 4400W 220V. Alta durabilidade e eficiência.',
  },
  {
    id: 1357,
    name: 'Porcelanato Marmorizado Retificado Polido Capraia Branco Tipo A 62,5X125CM',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7899060611843_1-300x300.webp',
    category: 'Pisos e Revestimentos',
    categorySlug: 'pisos-e-revestimentos',
    description: 'Porcelanato marmorizado retificado polido Capraia Branco 62,5x125cm Tipo A. Elegância e sofisticação para ambientes amplos.',
  },
  {
    id: 1553,
    name: 'Ar Condicionado Cassete Elgin 36.000BTU/h Plus Inverter',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-0005302928908_1-300x300.webp',
    category: 'Climatização',
    categorySlug: 'climatizacao',
    description: 'Ar Condicionado Cassete Elgin 36.000 BTU/h, tecnologia Inverter para economia de energia e climatização eficiente.',
  },
  {
    id: 1305,
    name: 'Chuveiro Docol Docolslim De Parede Com Desviador Cromado',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7891461065058_1-300x300.webp',
    category: 'Banheiro',
    categorySlug: 'banheiro',
    description: 'Chuveiro Docol Docolslim de parede com desviador cromado. Design slim e sofisticado para o seu banheiro.',
  },
  {
    id: 1290,
    name: 'Kit de Acessórios para Banheiro com 5 Peças Plus Cromado',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7891467068435_1-300x300.webp',
    category: 'Banheiro',
    categorySlug: 'banheiro',
    description: 'Kit completo com 5 peças para banheiro, acabamento cromado Plus. Inclui porta toalha, saboneteira e mais.',
  },
]

// ── Materiais Elétricos ───────────────────────────────────────────────────────
export const materiaisEletricos: Product[] = [
  {
    id: 1312,
    name: 'Eletroduto Corrugado Flexível PVC com 50M',
    image: '/wp-content/uploads/2024/06/gtd-300x300.webp',
    category: 'Materiais Elétricos',
    categorySlug: 'cabos-e-fios',
    description: 'Eletroduto corrugado flexível em PVC com 50 metros. Ideal para proteção de fiação elétrica.',
  },
  {
    id: 1265,
    name: 'Fio/Cabo Elétrico Flexível Antichamas Azul 2,5MM 100M',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7897381600607_1-300x300.webp',
    category: 'Materiais Elétricos',
    categorySlug: 'cabos-e-fios',
    description: 'Fio elétrico flexível antichamas azul 2,5MM em rolo de 100 metros. Aprovado pelas normas ABNT.',
  },
  {
    id: 1257,
    name: 'Fio/Cabo Elétrico Flexível Antichamas Vermelho 2,5MM 100M',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7897381600645_1-300x300.png',
    category: 'Materiais Elétricos',
    categorySlug: 'cabos-e-fios',
    description: 'Fio elétrico flexível antichamas vermelho 2,5MM em rolo de 100 metros. Alta qualidade e segurança.',
  },
  {
    id: 841,
    name: 'Caixa de Luz Tramontina 57500/041 4X2 Amarelo',
    image: '/wp-content/uploads/2023/12/carjas-s3-ecommerce-carajasonline-7891435046403_1-300x300-1.webp',
    category: 'Materiais Elétricos',
    categorySlug: 'cabos-e-fios',
    description: 'Caixa de luz Tramontina 4x2 amarelo. Para instalação de interruptores e tomadas.',
  },
  {
    id: 842,
    name: 'Centro de Distribuição Taf para 8 Disjuntores com Barramento Preto Tampa Branca',
    image: '/wp-content/uploads/2023/12/carjas-s3-ecommerce-carajasonline-7898330614386_1-300x300-1.webp',
    category: 'Materiais Elétricos',
    categorySlug: 'cabos-e-fios',
    description: 'Centro de distribuição Taf para 8 disjuntores com barramento. Tampa branca e barramento preto.',
  },
  {
    id: 845,
    name: 'Interruptor Tramontina Aria Duplo Simples 6A/250V Branco',
    image: '/wp-content/uploads/2023/12/carjas-s3-ecommerce-carajasonline-7891435937916_1-300x300-1.webp',
    category: 'Materiais Elétricos',
    categorySlug: 'cabos-e-fios',
    description: 'Interruptor Tramontina Aria duplo simples 6A/250V branco. Design moderno e fácil instalação.',
  },
]

// ── Pisos e Revestimentos ─────────────────────────────────────────────────────
export const pisosRevestimentos: Product[] = [
  {
    id: 1347,
    name: 'Piso Marmorizado Brilhante Ipanema Bege Tipo A 46x46cm',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7908597504167_1-300x300.webp',
    category: 'Pisos e Revestimentos',
    categorySlug: 'pisos-e-revestimentos',
    description: 'Piso marmorizado brilhante Ipanema Bege 46x46cm Tipo A. Elegante e resistente para áreas molhadas e secas.',
  },
  {
    id: 1367,
    name: 'Piso Cerâmico Pedra Granilhado Parati Bold Bege Tipo A 46X46CM',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898625861129_1-300x300.webp',
    category: 'Pisos e Revestimentos',
    categorySlug: 'pisos-e-revestimentos',
    description: 'Piso cerâmico com textuta granilhado Parati Bold Bege 46x46cm Tipo A. Antiderrapante e resistente.',
  },
  {
    id: 1355,
    name: 'Porcelanato Marmorizado Retificado Polido Chloe Lux Preto Tipo A',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7896880006224_1-300x300.webp',
    category: 'Pisos e Revestimentos',
    categorySlug: 'pisos-e-revestimentos',
    description: 'Porcelanato marmorizado Chloe Lux Preto, retificado e polido. Acabamento sofisticado para ambientes de alto padrão.',
  },
  {
    id: 1357,
    name: 'Porcelanato Marmorizado Retificado Polido Capraia Branco Tipo A 62,5X125CM',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7899060611843_1-300x300.webp',
    category: 'Pisos e Revestimentos',
    categorySlug: 'pisos-e-revestimentos',
    description: 'Porcelanato marmorizado Capraia Branco 62,5x125cm. Retificado e polido.',
  },
  {
    id: 837,
    name: 'Rejunte Flexível Casa Forte Branco 5Kg',
    image: '/wp-content/uploads/2023/12/carjas-s3-ecommerce-carajasonline-7898927960100_1-300x300-1.png',
    category: 'Material de Construção',
    categorySlug: 'material-de-construcao',
    description: 'Rejunte flexível Casa Forte branco, embalagem 5kg. Ideal para pisos e revestimentos cerâmicos.',
  },
  {
    id: 1365,
    name: 'Piso Cerâmico Decorado Acetinado Panamá Retrô Tipo A 57X57CM',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898625863123_1-300x300.webp',
    category: 'Pisos e Revestimentos',
    categorySlug: 'pisos-e-revestimentos',
    description: 'Piso cerâmico decorado acetinado Panamá Retrô 57x57cm Tipo A. Design exclusivo com estilo retrô.',
  },
]

// ── Eletrodomésticos ──────────────────────────────────────────────────────────
export const eletrodomesticos: Product[] = [
  {
    id: 906,
    name: 'Lavadora 17Kg Inox Panasonic NA-F170P6TA',
    image: '/wp-content/uploads/2023/12/transferir-2022-09-10T183834.054-1-300x300.jpg',
    category: 'Eletrodomésticos',
    categorySlug: 'eletrodomesticos',
    description: 'Lavadora Panasonic 17Kg inox com tecnologia de lavagem eficiente. Alta capacidade para famílias grandes.',
  },
  {
    id: 913,
    name: 'Refrigerador Bottom Db53x Frost Free Painel Blue Touch 454 Litros Inox Electrolux',
    image: '/wp-content/uploads/2023/12/transferir-2022-09-10T200142.389-1-300x300.jpg',
    category: 'Eletrodomésticos',
    categorySlug: 'eletrodomesticos',
    description: 'Refrigerador Electrolux 454 litros Frost Free com painel Blue Touch. Design inox e tecnologia avançada.',
  },
  {
    id: 902,
    name: 'Freezer Midea 150L Branco',
    image: '/wp-content/uploads/2023/12/transferir-2022-09-10T193917.171-1-300x300.jpg',
    category: 'Eletrodomésticos',
    categorySlug: 'eletrodomesticos',
    description: 'Freezer horizontal Midea 150 litros branco. Ideal para conservação de alimentos e bebidas.',
  },
  {
    id: 919,
    name: 'Fritadeira Elétrica Sem Óleo Mondial Grand Family AFN-50 Capacidade 5L Inox',
    image: '/wp-content/uploads/2023/12/12g-1-300x300.jpg',
    category: 'Eletrodomésticos',
    categorySlug: 'eletrodomesticos',
    description: 'Air Fryer Mondial Grand Family 5L inox. Frituras sem óleo com até 80% menos gordura.',
  },
  {
    id: 920,
    name: 'Liquidificador Portátil Mondial Turbo Power L-99 2.2 L preto',
    image: '/wp-content/uploads/2023/12/liquidificador-mondial-turbo-power-3-velocidades-500w-220v-preto-l-99-fb_1583257834_gg-1-300x300.jpg',
    category: 'Eletrodomésticos',
    categorySlug: 'eletrodomesticos',
    description: 'Liquidificador Mondial Turbo Power L-99 2,2 litros preto com jarra de vidro. 3 velocidades + pulsar.',
  },
  {
    id: 912,
    name: 'Micro-ondas LG Easy Clean Branco 30L',
    image: '/wp-content/uploads/2023/12/transferir-2022-09-11T054000.044-1-300x300.jpg',
    category: 'Eletrodomésticos',
    categorySlug: 'eletrodomesticos',
    description: 'Micro-ondas LG Easy Clean 30 litros branco com revestimento interno de fácil limpeza.',
  },
]

// ── Telhas ────────────────────────────────────────────────────────────────────
export const telhas: Product[] = [
  {
    id: 1220,
    name: 'Telha PVC Colonial Cerâmica 2,30X0,86CM 2MM',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898591255502_1-300x300.webp',
    category: 'Telhas',
    categorySlug: 'telhas',
    description: 'Telha PVC Colonial cor cerâmica 2,30x0,86m espessura 2mm. Leve, resistente e com ótimo acabamento.',
  },
  {
    id: 1228,
    name: 'Telha de PVC Colonial Marfim 2,30m x 88cm 2mm',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898187882365_1-300x300.webp',
    category: 'Telhas',
    categorySlug: 'telhas',
    description: 'Telha PVC Colonial cor marfim 2,30m x 88cm 2mm. Excelente isolamento térmico e acústico.',
  },
  {
    id: 1224,
    name: 'Telha Calha Forte Metálica Aço Galvalume 3x0,98m 0,43mm',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7897871109795_1-300x300.webp',
    category: 'Telhas',
    categorySlug: 'telhas',
    description: 'Telha metálica em aço galvalume Calha Forte 3x0,98m espessura 0,43mm. Alta resistência à corrosão.',
  },
  {
    id: 1218,
    name: 'Telha de fibrocimento ondulada 2,44m x 1,10m 5mm',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898649610536_1-1-300x300.webp',
    category: 'Telhas',
    categorySlug: 'telhas',
    description: 'Telha de fibrocimento ondulada 2,44m x 1,10m espessura 5mm. Resistente e durável para toda obra.',
  },
  {
    id: 1226,
    name: 'Telha em Pvc Colonial Cerâmica 1,97x0,86M',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898187882945_1-300x300.webp',
    category: 'Telhas',
    categorySlug: 'telhas',
    description: 'Telha PVC Colonial cerâmica 1,97x0,86m. Ideal para coberturas residenciais com design tradicional.',
  },
  {
    id: 1222,
    name: 'Cumeeira em PVC Colonial Central Plan Concreto 35X88CM 1,6MM',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898591255649_1-300x300.webp',
    category: 'Telhas',
    categorySlug: 'telhas',
    description: 'Cumeeira PVC Colonial Central Plan cor concreto 35x88cm 1,6mm. Complemento perfeito para suas telhas PVC.',
  },
]

// ── Banheiro ──────────────────────────────────────────────────────────────────
export const banheiro: Product[] = [
  {
    id: 1290,
    name: 'Kit de Acessórios para Banheiro com 5 Peças Plus Cromado',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7891467068435_1-300x300.webp',
    category: 'Banheiro',
    categorySlug: 'banheiro',
    description: 'Kit com 5 peças para banheiro em acabamento cromado Plus. Inclui porta-toalha, saboneteira, papeleira e mais.',
  },
  {
    id: 1282,
    name: 'Conjunto Acoplado com Acionamento Duplo 3|6 Litros e Kit de Instalação Like Branco',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7896902181106_1-300x300.webp',
    category: 'Banheiro',
    categorySlug: 'banheiro',
    description: 'Conjunto acoplado Like branco com acionamento duplo 3/6 litros e kit de instalação completo.',
  },
  {
    id: 1284,
    name: 'Ducha Higiênica Marujá Branco e Cromado',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898010801877_1-300x300.webp',
    category: 'Banheiro',
    categorySlug: 'banheiro',
    description: 'Ducha higiênica Marujá com acabamento branco e cromado. Fácil instalação e uso confortável.',
  },
  {
    id: 1305,
    name: 'Chuveiro Docol Docolslim De Parede Com Desviador Cromado',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7891461065058_1-300x300.webp',
    category: 'Banheiro',
    categorySlug: 'banheiro',
    description: 'Chuveiro Docol Docolslim de parede com desviador cromado. Design slim elegante.',
  },
  {
    id: 1286,
    name: 'Lavatório Luzarte Suspenso Evora M02 Branco',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7908656101283_1-300x300.webp',
    category: 'Banheiro',
    categorySlug: 'banheiro',
    description: 'Lavatório suspenso Luzarte Evora M02 branco. Design moderno e resistente para banheiros contemporâneos.',
  },
  {
    id: 1298,
    name: 'Misturador Monocomando Lavatório Mesa',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7891461490232_1-300x300.png',
    category: 'Banheiro',
    categorySlug: 'banheiro',
    description: 'Misturador monocomando para lavatório de mesa. Acabamento cromado e fácil operação.',
  },
]

// ── Ferramentas ───────────────────────────────────────────────────────────────
export const ferramentas: Product[] = [
  {
    id: 1448,
    name: 'Caixa de Ferramentas Sanfonada com 5 Gavetas e Alças Fixas Azul',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7891114164350_1-300x300.webp',
    category: 'Ferramentas',
    categorySlug: 'ferramentas',
    description: 'Caixa de ferramentas sanfonada com 5 gavetas e alças fixas azul. Organização e praticidade para seu trabalho.',
  },
  {
    id: 1456,
    name: 'Esmerilhadeira Angular Vonder 4.1/2 115mm EAV860N 11000RPM 860W 220V',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7893946510602_1-300x300.webp',
    category: 'Ferramentas',
    categorySlug: 'ferramentas',
    description: 'Esmerilhadeira angular Vonder 4.1/2 com 860W de potência, 11.000 RPM e 220V.',
  },
  {
    id: 1454,
    name: 'Furadeira Bosch De Impacto 1/2 GSB 16 RE 850W 220V+Maleta',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-4059952629797_1-300x300.webp',
    category: 'Ferramentas',
    categorySlug: 'ferramentas',
    description: 'Furadeira de impacto Bosch GSB 16 RE 850W 220V com maleta. Alta performance para obras e reformas.',
  },
  {
    id: 1450,
    name: 'Parafusadeira e Furadeira de Impacto a Bateria com Maleta e Kit de Brocas e Bits 17 Peças',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7893946770587_1-300x300.webp',
    category: 'Ferramentas',
    categorySlug: 'ferramentas',
    description: 'Parafusadeira/furadeira a bateria com maleta e kit de 17 brocas e bits. Versatil e portátil.',
  },
  {
    id: 1452,
    name: 'Disco De Serra Stamaco Para Alumínio E MDF 185 MM',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7897371610739_1-300x300.webp',
    category: 'Ferramentas',
    categorySlug: 'ferramentas',
    description: 'Disco de serra Stamaco 185mm para alumínio e MDF. Corte preciso e durável.',
  },
  {
    id: 1444,
    name: 'Lavadora Alta Pressão 1300 Libras 1200W 220V',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7893946837976_1-300x300.webp',
    category: 'Ferramentas',
    categorySlug: 'ferramentas',
    description: 'Lavadora de alta pressão 1300 libras 1200W 220V. Ideal para limpeza de superfícies externas.',
  },
]

// ── Catálogo completo (para lookup por ID) ────────────────────────────────────
export const allProducts: Product[] = [
  ...maisVendidos,
  ...materiaisEletricos,
  ...pisosRevestimentos,
  ...eletrodomesticos,
  ...telhas,
  ...banheiro,
  ...ferramentas,
]

export function findProductById(id: number): Product | undefined {
  return allProducts.find((p) => p.id === id)
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  return allProducts
    .filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
    .slice(0, count)
}
