import styled from "styled-components";
import fundo from "../../assets/images/fundo.png";
import { cores } from "../../Global";

export const BannerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 384px;
  margin-bottom: 80px;

  background-image: url(${fundo});
  background-size: cover;
`;

export const BannerH1 = styled.h1`
  text-align: center;

  font-weight: 900;
  width: 32%;

  color: ${cores.vermelho};
`;
