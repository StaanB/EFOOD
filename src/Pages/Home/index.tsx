import Banner from "../../Components/Banner";
import RestaurantClass from "../../Models/Restaurant";

import Hioki from "../../assets/images/japanese_restaurant.png";
import VitaTrattoria from "../../assets/images/italian_restaurant.png";
import BellaNapoli from "../../assets/images/Bella_napoli.jpg";
import ChezBernard from "../../assets/images/chez_bernard.jpg";
import MaliMari from "../../assets/images/malimari.webp";
import CasaDoPorco from "../../assets/images/casa_do_porco.png";

import RestaurantList from "../../Components/RestaurantList";

export const Restaurants: RestaurantClass[] = [
  {
    id: 1,
    destaque: true,
    categoria: "Japonesa",
    imagem: Hioki,
    nome: "Hioki Sushi",
    nota: "4.9",
    info: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    link: "/hiokisushi",
  },
  {
    id: 2,
    destaque: true,
    categoria: "Brasileira",
    imagem: CasaDoPorco,
    nome: "Casa do Porco",
    nota: "4.8",
    info: "A Casa do Porco é um lugar democrático, onde todos são bem-vindos. Então aproveita o tempo de espera e conheça o Centro de São Paulo. O Centro é uma efervescência de arte e cultura, onde você pode passear e conhecer o trabalho de muita gente legal.",
    link: "/casadoporco",
  },
  {
    id: 3,
    destaque: false,
    categoria: "Francesa",
    imagem: ChezBernard,
    nome: "Chez Bernard",
    nota: "4.7",
    info: "O Chez Bernard, fundado em 1963 pelo francês Bernard Goethals. O francês mais antigo da cidade passou por muitas mudanças, mudou de dono algumas vezes, mas não perdeu sua essência. Peça já o seu antes que acabe!",
    link: "/chezbernard",
  },
  {
    id: 4,
    destaque: false,
    categoria: "Italiana",
    imagem: VitaTrattoria,
    nome: "La Dolce Vita Trattoria",
    nota: "4.6",
    info: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    link: "/ladolcevita",
  },
  {
    id: 5,
    destaque: false,
    categoria: "Chinesa",
    imagem: MaliMari,
    nome: "MaliMari",
    nota: "4.5",
    info: "Experimentar yakisoba fascinante e tamboril ótimo é o que a maioria dos clientes recomendam. Convidados não gostam de cortado neste restaurante. Baseado em opiniões dos críticos, os funcionários podem ser eficientes.",
    link: "/malimari",
  },
  {
    id: 6,
    destaque: false,
    categoria: "Italiana",
    imagem: BellaNapoli,
    nome: "Bella Napoli",
    nota: "4.4",
    info: "Desde de 1962, o Bella Napoli conquistou um lugar especial no cenário gastronômico. Com um cardápio que traz pratos cheios de segredos das saborosas e exclusivas receitas da família Sciarretta Angelino, das massas aos frutos do mar, de todas as regiões da Itália.",
    link: "/bellanapoli",
  },
];

const Home = () => (
  <>
    <Banner />
    <RestaurantList restaurants={Restaurants} />
  </>
);

export default Home;
