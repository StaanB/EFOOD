import {
  RestaurantButton,
  RestaurantContainer,
  RestaurantInfo,
  RestaurantTag,
  RestaurantTagContainer,
  RestaurantTitle,
} from "./styles";

import Estrela from "../../assets/images/estrela.png";

type Props = {
  imagem: string;
  nome: string;
  nota: string;
  info: string;
  destaque?: boolean;
  categoria: string;
  link: string;
};

const Restaurant = ({
  destaque,
  categoria,
  nome,
  imagem,
  nota,
  info,
  link,
}: Props) => (
  <RestaurantContainer>
    <img src={imagem} alt={nome} />
    <RestaurantTitle>
      <h2>{nome}</h2>
      <span>
        {nota}
        <img src={Estrela} alt="Nota do restaurante" />
      </span>
    </RestaurantTitle>
    <RestaurantInfo>{info}</RestaurantInfo>
    <RestaurantButton to={link}>Saiba mais</RestaurantButton>

    <RestaurantTagContainer destaque={destaque}>
      {destaque ? <RestaurantTag>Destaque da semana</RestaurantTag> : ""}
      <RestaurantTag>{categoria}</RestaurantTag>
    </RestaurantTagContainer>
  </RestaurantContainer>
);

export default Restaurant;
