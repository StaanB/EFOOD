import Header from "../../Components/Header";
import PlatesList from "../../Components/PlatesList";
import Presentation from "../../Components/Presentation";

import { Restaurants } from "../Home";
import CasaDoPorcoImage from "../../assets/images/casa_porco_background.png";

const CasaDoPorco = () => (
  <>
    <Header />
    <Presentation
      categoria={Restaurants[1].categoria}
      nome={Restaurants[1].nome}
      imagem={CasaDoPorcoImage}
    />
    <PlatesList />
  </>
);

export default CasaDoPorco;