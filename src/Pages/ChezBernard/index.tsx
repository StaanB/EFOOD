import Header from "../../Components/Header";
import PlatesList from "../../Components/PlatesList";
import Presentation from "../../Components/Presentation";

import { Restaurants } from "../Home";
import  ChezBackground from "../../assets/images/chez_bernard_background.png";

const ChezBernad = () => (
  <>
    <Header />
    <Presentation
      categoria={Restaurants[2].categoria}
      nome={Restaurants[2].nome}
      imagem={ChezBackground}
    />
    <PlatesList />
  </>
);

export default ChezBernad;