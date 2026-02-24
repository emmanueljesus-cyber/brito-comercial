<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import PromoBanners from '@/components/sections/PromoBanners.vue'
import CategoryBanners from '@/components/sections/CategoryBanners.vue'
import ProductSection from '@/components/sections/ProductSection.vue'
import FerramentasBanner from '@/components/sections/FerramentasBanner.vue'
import type { Product } from '@/data/products'

// ── Banners promocionais (2 colunas) ─────────────────────────────────────────
const promoBanners = [
  {
    image: '/wp-content/uploads/2025/05/fc8d09bd-e77b-425c-8bbb-60d5cd4f5a0b.webp',
    alt: 'Promoção Especial',
    link: '#',
  },
  {
    image: '/wp-content/uploads/2025/05/a312381c-21fc-4809-90b7-820c56c3054f.webp',
    alt: 'Ofertas da Semana',
    link: '#',
  },
]

// ── Banners de categoria (3 colunas mosaico) ──────────────────────────────────
const categoryBanners = [
  {
    image: '/wp-content/uploads/2024/06/DESTAQUES_DESK_JUN_2a_QUIN_QUINZENA_DAS_TELHAS_635x340.webp',
    label: 'Telhas',
    sectionId: 'telhas',
  },
  {
    image: '/wp-content/uploads/2024/06/MOSAICO_DESK_JUN_2a_QUIN_MATERIAIS_ELETRICOS_416x230.webp',
    label: 'Materiais Elétricos',
    sectionId: 'materiais-eletricos',
  },
  {
    image: '/wp-content/uploads/2024/06/MOSAICO_DESK_JUN_2a_QUIN_MATERIAIS_HIDRAULICOS_416x230.webp',
    label: 'Hidráulico',
    sectionId: 'banheiro',
  },
]

// ── Mais Vendidos (12 produtos, grid 6) ───────────────────────────────────────
const maisVendidos: Product[] = [
  {
    id: 943,
    name: 'Caixa de Som JBL PARTYBOX 1000 com Bluetooth e Efeitos de Luzes Preto',
    image: '/wp-content/uploads/2023/12/caixa-de-som-portatil-para-festas-com-bluetooth-e-efeitos-de-luzes-preto-103459-1612471927-2-1-1-300x300.jpg',
    link: '#',
  },
  {
    id: 909,
    name: 'Liquidificador Trapèze Cadence com filtro LIQ347 1,5 Litros 4 Velocidade + Pulsa 350W',
    image: '/wp-content/uploads/2023/12/transferir-9-1-300x300.webp',
    link: '#',
  },
  {
    id: 1491,
    name: 'Registro Esfera Viqua Soldavel 110MM Predial Marrom',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898010801846_1-300x300.webp',
    link: '#',
  },
  {
    id: 1353,
    name: 'Revestimento Incenor Milagres Brilhante PSI-63110R 63x63 Tipo A',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7908576600439_1-300x300.jpg',
    link: '#',
  },
  {
    id: 832,
    name: 'ARAME RECOZIDO 18 – 1 KG',
    image: '/wp-content/uploads/2023/12/thumb_400-400-arame-recozido-2-vergalhao-aco-1-300x300-1.webp',
    link: '#',
  },
  {
    id: 1359,
    name: 'Revestimento Cerâmico 3D Brilhante Cadiz Branco Tipo A 37X59CM',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7899719802011_1-300x300.webp',
    link: '#',
  },
  {
    id: 1226,
    name: 'Telha em Pvc Colonial Cerâmica 1,97x0,86M',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898187882945_1-300x300.webp',
    link: '#',
  },
  {
    id: 1294,
    name: 'Chuveiro Elétrico com Resistência Blindada Super Ducha Branco 4400W 220V',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7896039799953_1-300x300.webp',
    link: '#',
  },
  {
    id: 1357,
    name: 'Porcelanato Marmorizado Retificado Polido Capraia Branco Tipo A 62,5X125CM',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7899060611843_1-300x300.webp',
    link: '#',
  },
  {
    id: 1553,
    name: 'Ar Condicionado Cassete Elgin 36.000BTU/h Plus Inverter',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-0005302928908_1-300x300.webp',
    link: '#',
  },
  {
    id: 1305,
    name: 'Chuveiro Docol Docolslim De Parede Com Desviador Cromado',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7891461065058_1-300x300.webp',
    link: '#',
  },
  {
    id: 1290,
    name: 'Kit de Acessórios para Banheiro com 5 Peças Plus Cromado',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7891467068435_1-300x300.webp',
    link: '#',
  },
]

// ── Materiais Elétricos (6 produtos) ─────────────────────────────────────────
const materiaisEletricos: Product[] = [
  {
    id: 1312,
    name: 'Eletroduto Corrugado Flexível PVC com 50M',
    image: '/wp-content/uploads/2024/06/gtd-300x300.webp',
    link: '#',
  },
  {
    id: 1265,
    name: 'Fio/Cabo Elétrico Flexível Antichamas Azul 2,5MM 100M',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7897381600607_1-300x300.webp',
    link: '#',
  },
  {
    id: 1257,
    name: 'Fio/Cabo Elétrico Flexível Antichamas Vermelho 2,5MM 100M',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7897381600645_1-300x300.png',
    link: '#',
  },
  {
    id: 841,
    name: 'Caixa de Luz Tramontina 57500/041 4X2 Amarelo',
    image: '/wp-content/uploads/2023/12/carjas-s3-ecommerce-carajasonline-7891435046403_1-300x300-1.webp',
    link: '#',
  },
  {
    id: 842,
    name: 'Centro de Distribuição Taf para 8 Disjuntores com Barramento Preto Tampa Branca',
    image: '/wp-content/uploads/2023/12/carjas-s3-ecommerce-carajasonline-7898330614386_1-300x300-1.webp',
    link: '#',
  },
  {
    id: 845,
    name: 'Interruptor Tramontina Aria Duplo Simples 6A/250V Branco',
    image: '/wp-content/uploads/2023/12/carjas-s3-ecommerce-carajasonline-7891435937916_1-300x300-1.webp',
    link: '#',
  },
]

// ── Pisos e Revestimentos (6 produtos) ───────────────────────────────────────
const pisosRevestimentos: Product[] = [
  {
    id: 1347,
    name: 'Piso Marmorizado Brilhante Ipanema Bege Tipo A 46x46cm',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7908597504167_1-300x300.webp',
    link: '#',
  },
  {
    id: 1367,
    name: 'Piso Cerâmico Pedra Granilhado Parati Bold Bege Tipo A 46X46CM',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898625861129_1-300x300.webp',
    link: '#',
  },
  {
    id: 1355,
    name: 'Porcelanato Marmorizado Retificado Polido Chloe Lux Preto Tipo A',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7896880006224_1-300x300.webp',
    link: '#',
  },
  {
    id: 1357,
    name: 'Porcelanato Marmorizado Retificado Polido Capraia Branco Tipo A 62,5X125CM',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7899060611843_1-300x300.webp',
    link: '#',
  },
  {
    id: 837,
    name: 'Rejunte Flexível Casa Forte Branco 5Kg',
    image: '/wp-content/uploads/2023/12/carjas-s3-ecommerce-carajasonline-7898927960100_1-300x300-1.png',
    link: '#',
  },
  {
    id: 1365,
    name: 'Piso Cerâmico Decorado Acetinado Panamá Retrô Tipo A 57X57CM',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898625863123_1-300x300.webp',
    link: '#',
  },
]

// ── Eletrodomésticos (6 produtos) ────────────────────────────────────────────
const eletrodomesticos: Product[] = [
  {
    id: 906,
    name: 'Lavadora 17Kg Inox Panasonic NA-F170P6TA',
    image: '/wp-content/uploads/2023/12/transferir-2022-09-10T183834.054-1-300x300.jpg',
    link: '#',
  },
  {
    id: 913,
    name: 'Refrigerador Bottom Db53x Frost Free Painel Blue Touch 454 Litros Inox Electrolux',
    image: '/wp-content/uploads/2023/12/transferir-2022-09-10T200142.389-1-300x300.jpg',
    link: '#',
  },
  {
    id: 902,
    name: 'Freezer Midea 150L Branco',
    image: '/wp-content/uploads/2023/12/transferir-2022-09-10T193917.171-1-300x300.jpg',
    link: '#',
  },
  {
    id: 919,
    name: 'Fritadeira Elétrica Sem Óleo Mondial Grand Family AFN-50 Capacidade 5L Inox',
    image: '/wp-content/uploads/2023/12/12g-1-300x300.jpg',
    link: '#',
  },
  {
    id: 920,
    name: 'Liquidificador Portátil Mondial Turbo Power L-99 2.2 L preto',
    image: '/wp-content/uploads/2023/12/liquidificador-mondial-turbo-power-3-velocidades-500w-220v-preto-l-99-fb_1583257834_gg-1-300x300.jpg',
    link: '#',
  },
  {
    id: 912,
    name: 'Micro-ondas LG Easy Clean Branco 30L',
    image: '/wp-content/uploads/2023/12/transferir-2022-09-11T054000.044-1-300x300.jpg',
    link: '#',
  },
]

// ── Telhas (6 produtos) ──────────────────────────────────────────────────────
const telhas: Product[] = [
  {
    id: 1220,
    name: 'Telha PVC Colonial Cerâmica 2,30X0,86CM 2MM',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898591255502_1-300x300.webp',
    link: '#',
  },
  {
    id: 1228,
    name: 'Telha de PVC Colonial Marfim 2,30m x 88cm 2mm',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898187882365_1-300x300.webp',
    link: '#',
  },
  {
    id: 1224,
    name: 'Telha Calha Forte Metálica Aço Galvalume 3x0,98m 0,43mm',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7897871109795_1-300x300.webp',
    link: '#',
  },
  {
    id: 1218,
    name: 'Telha de fibrocimento ondulada 2,44m x 1,10m 5mm',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898649610536_1-1-300x300.webp',
    link: '#',
  },
  {
    id: 1226,
    name: 'Telha em Pvc Colonial Cerâmica 1,97x0,86M',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898187882945_1-300x300.webp',
    link: '#',
  },
  {
    id: 1222,
    name: 'Cumeeira em PVC Colonial Central Plan Concreto 35X88CM 1,6MM',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898591255649_1-300x300.webp',
    link: '#',
  },
]

// ── Banheiro (6 produtos) ────────────────────────────────────────────────────
const banheiro: Product[] = [
  {
    id: 1290,
    name: 'Kit de Acessórios para Banheiro com 5 Peças Plus Cromado',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7891467068435_1-300x300.webp',
    link: '#',
  },
  {
    id: 1282,
    name: 'Conjunto Acoplado com Acionamento Duplo 3|6 Litros e Kit de Instalação Like Branco',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7896902181106_1-300x300.webp',
    link: '#',
  },
  {
    id: 1284,
    name: 'Ducha Higiênica Marujá Branco e Cromado',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7898010801877_1-300x300.webp',
    link: '#',
  },
  {
    id: 1305,
    name: 'Chuveiro Docol Docolslim De Parede Com Desviador Cromado',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7891461065058_1-300x300.webp',
    link: '#',
  },
  {
    id: 1286,
    name: 'Lavatório Luzarte Suspenso Evora M02 Branco',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7908656101283_1-300x300.webp',
    link: '#',
  },
  {
    id: 1298,
    name: 'Misturador Monocomando Lavatório Mesa',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7891461490232_1-300x300.png',
    link: '#',
  },
]

// ── Ferramentas (6 produtos) ─────────────────────────────────────────────────
const ferramentas: Product[] = [
  {
    id: 1448,
    name: 'Caixa de Ferramentas Sanfonada com 5 Gavetas e Alças Fixas Azul',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7891114164350_1-300x300.webp',
    link: '#',
  },
  {
    id: 1456,
    name: 'Esmerilhadeira Angular Vonder 4.1/2 115mm EAV860N 11000RPM 860W 220V',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7893946510602_1-300x300.webp',
    link: '#',
  },
  {
    id: 1454,
    name: 'Furadeira Bosch De Impacto 1/2 GSB 16 RE 850W 220V+Maleta',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-4059952629797_1-300x300.webp',
    link: '#',
  },
  {
    id: 1450,
    name: 'Parafusadeira e Furadeira de Impacto a Bateria com Maleta e Kit de Brocas e Bits 17 Peças',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7893946770587_1-300x300.webp',
    link: '#',
  },
  {
    id: 1452,
    name: 'Disco De Serra Stamaco Para Alumínio E MDF 185 MM',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7897371610739_1-300x300.webp',
    link: '#',
  },
  {
    id: 1444,
    name: 'Lavadora Alta Pressão 1300 Libras 1200W 220V',
    image: '/wp-content/uploads/2024/06/carjas-s3-ecommerce-carajasonline-7893946837976_1-300x300.webp',
    link: '#',
  },
]
</script>

<template>
  <main>
    <!-- 1. Hero -->
    <HeroSection />

    <!-- 2. Banners Promocionais (2 colunas) -->
    <PromoBanners :banners="promoBanners" />

    <!-- 3. Mais Vendidos (12 produtos, grid-6) -->
    <ProductSection
      id="mais-vendidos"
      title="Mais Vendidos"
      :products="maisVendidos"
      bg="white"
    />

    <!-- 4. Banners Categoria (3 colunas) -->
    <CategoryBanners :banners="categoryBanners" />

    <!-- 5. Materiais Elétricos -->
    <ProductSection
      id="materiais-eletricos"
      title="Materiais Elétricos"
      :products="materiaisEletricos"
      bg="gray"
    />

    <!-- 6. Pisos e Revestimentos -->
    <ProductSection
      id="pisos-revestimentos"
      title="Pisos e Revestimentos"
      :products="pisosRevestimentos"
      bg="white"
    />

    <!-- 7. Eletrodomésticos -->
    <ProductSection
      id="eletrodomesticos"
      title="Eletrodomésticos"
      :products="eletrodomesticos"
      bg="gray"
    />

    <!-- 8. Telhas -->
    <ProductSection
      id="telhas"
      title="Telhas"
      :products="telhas"
      bg="white"
    />

    <!-- 9. Banheiro -->
    <ProductSection
      id="banheiro"
      title="Banheiro"
      :products="banheiro"
      bg="gray"
    />

    <!-- 10. Banner Ferramentas -->
    <FerramentasBanner />

    <!-- 11. Ferramentas -->
    <ProductSection
      id="ferramentas"
      title="Ferramentas"
      :products="ferramentas"
      bg="white"
    />
  </main>
</template>
