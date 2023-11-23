import Header from "../../Components/Header";
import PlatesList from "../../Components/PlatesList";
import Presentation from "../../Components/Presentation";

import { Restaurants } from "../Home";
import HiokiBackground from "../../assets/images/hioki_background.png";

const HiokiSushi = () => (
  <>
    <Header />
    <Presentation
      categoria={Restaurants[0].categoria}
      nome={Restaurants[0].nome}
      imagem={HiokiBackground}
    />
    <PlatesList />
  </>
);

export default HiokiSushi;