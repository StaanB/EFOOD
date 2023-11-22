import styled from "styled-components";
import restaurant from "../../assets/images/italian_background.png";
import { cores } from "../../Global";

export const ItalianBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;

  height: 280px;
  font-size: 32px;
  margin-bottom: 80px;
  font-weight: 900;

  background-image: url(${restaurant});
  background-size: cover;

  span,
  h1 {
    margin-left: 170px;
    color: ${cores.branco};
  }

  span {
    font-weight: 100;
  }
`;
