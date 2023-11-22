import { FooterContainer, FooterCopy, LogoSocialDiv } from "./styles";

import logo from "../../assets/images//logo.svg";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";

const Footer = () => (
  <FooterContainer>
    <LogoSocialDiv>
      <img src={logo} alt="Efood Logo" />

      <ul>
        <li>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
      </ul>
    </LogoSocialDiv>

    <FooterCopy>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </FooterCopy>
  </FooterContainer>
);

export default Footer;
