import styled from "styled-components";
import restaurant from "../../assets/images/italian_background.png";
import { cores } from "../../Global";

export const ItalianBanner = styled.div`

  height: 280px;
  font-size: 32px;
  margin-bottom: 80px;
  font-weight: 900;

  background-image: url(${restaurant});
  background-size: cover;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    text-align: start;

    height: 100%;
    
    color: ${cores.branco};
  }
  
  span {
    font-weight: 100;
    margin-top: 24px;
    font-size: 32px;
  }
  
  h1{
    margin-bottom: 32px;
    font-size: 32px;
  }
`;
