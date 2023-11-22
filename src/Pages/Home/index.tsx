import Banner from "../../Components/Banner";
import RestaurantClass from "../../Models/Restaurant";

import Hioki from "../../assets/images/japanese_restaurant.png";
import VitaTrattoria from "../../assets/images/italian_restaurant.png";
import RestaurantList from "../../Components/RestaurantList";

const Restaurants: RestaurantClass[] = [
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
    destaque: false,
    categoria: "Italiana",
    imagem: VitaTrattoria,
    nome: "La Dolce Vita Trattoria",
    nota: "4.6",
    info: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    link: "/ladolcevita",
  },
  {
    id: 3,
    destaque: false,
    categoria: "Italiana",
    imagem: VitaTrattoria,
    nome: "La Dolce Vita Trattoria",
    nota: "4.6",
    info: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    link: "/ladolcevita",
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
    categoria: "Italiana",
    imagem: VitaTrattoria,
    nome: "La Dolce Vita Trattoria",
    nota: "4.6",
    info: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    link: "/ladolcevita",
  },
  {
    id: 6,
    destaque: false,
    categoria: "Italiana",
    imagem: VitaTrattoria,
    nome: "La Dolce Vita Trattoria",
    nota: "4.6",
    info: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    link: "/ladolcevita",
  },
];

const Home = () => (
  <>
    <Banner />
    <RestaurantList restaurants={Restaurants} />
  </>
);

export default Home;
