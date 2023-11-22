import RestaurantClass from "../../Models/Restaurant";
import Restaurant from "../Restaurant";
import { List } from "./style";

type Props = {
  restaurants: RestaurantClass[];
};

const RestaurantList = ({ restaurants }: Props) => (
  <List className="container">
    {restaurants.map((restaurant) => (
      <Restaurant
        key={restaurant.id}
        categoria={restaurant.categoria}
        destaque={restaurant.destaque}
        imagem={restaurant.imagem}
        nome={restaurant.nome}
        nota={restaurant.nota}
        info={restaurant.info}
        link={restaurant.link}
      />
    ))}
  </List>
);

export default RestaurantList;
