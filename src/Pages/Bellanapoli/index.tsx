import Header from "../../Components/Header";
import PlatesList from "../../Components/PlatesList";
import Presentation from "../../Components/Presentation";

import { Restaurants } from "../Home";
import BellanapoliImage from "../../assets/images/bella_napoli_background.png";

const BellaNapoli = () => (
  <>
    <Header />
    <Presentation
      categoria={Restaurants[5].categoria}
      nome={Restaurants[5].nome}
      imagem={BellanapoliImage}
    />
    <PlatesList />
  </>
);

export default BellaNapoli;