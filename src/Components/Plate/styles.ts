import styled from "styled-components";
import { cores } from "../../Global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 8px;
  padding: 8px;
  width: 320px;
  height: 338px;

  background-color: ${cores.vermelho};
  color: ${cores.bege};

  h2 {
    font-size: 16px;
    font-weight: 900;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;

  font-weight: 900;
  font-size: 14px;
  height: 24px;

  color: ${cores.vermelho};
  background-color: ${cores.bege};
`;
