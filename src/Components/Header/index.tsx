import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import * as S from "./styles";

const Header = () => (
  <S.Container>
    <div className="container">
      <S.TextLink to="/">Restaurantes</S.TextLink>
      <Link to="/">
        <img src={logo} alt="Efood Logo" />
      </Link>
      <p>0 produto(s) no carrinho</p>
    </div>
  </S.Container>
);

export default Header;
