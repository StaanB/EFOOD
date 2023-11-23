import Header from "../../Components/Header";
import PlatesList from "../../Components/PlatesList";
import Presentation from "../../Components/Presentation";

import { Restaurants } from "../Home";
import MalimariImage from "../../assets/images/malimari_background.png";

const Malimari = () => (
  <>
    <Header />
    <Presentation
      categoria={Restaurants[4].categoria}
      nome={Restaurants[4].nome}
      imagem={MalimariImage}
    />
    <PlatesList />
  </>
);

export default Malimari;
