import { Link } from "react-router-dom";
import styled from "styled-components";
import fundo from "../../assets/images/fundo.png";
import { cores } from "../../Global";

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 166px;
  font-size: 18px;
  font-weight: 900;

  background-image: url(${fundo});
  background-size: cover;
  color: ${cores.vermelho};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: ${cores.vermelho};
`;
