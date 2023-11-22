import styled from "styled-components";
import { cores } from "../../Global";
import { Link } from "react-router-dom";

type Props = {
  destaque?: boolean;
};

export const RestaurantContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 472px;
  height: 398px;
  font-weight: 700;

  color: ${cores.vermelho};
  background-color: ${cores.branco};
`;

export const RestaurantTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px;
  font-size: 18px;

  span {
    display: flex;
    align-items: center;

    gap: 8px;
  }
`;

export const RestaurantInfo = styled.p`
  padding: 8px;
  font-size: 14px;
  font-weight: 400;
`;

export const RestaurantButton = styled(Link)`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 14px;
  width: 82px;
  height: 24px;
  margin-left: 8px;
  margin-top: 8px;

  color: ${cores.branco};
  background-color: ${cores.vermelho};
`;

export const RestaurantTagContainer = styled.div<Props>`
  display: flex;
  position: absolute;

  top: 16px;
  left: ${(props) => (props.destaque ? "230px" : "390px")};
  gap: 8px;
`;

export const RestaurantTag = styled.span`
  display: flex;
  align-items: center;

  width: auto;
  height: 14px;
  padding: 12px;

  font-weight: 700;
  font-size: 12px;

  color: ${cores.branco};
  background-color: ${cores.vermelho};
`;
