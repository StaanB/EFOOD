import { useState } from "react";
import Modal from "../Modal";
import Plate from "../Plate";
import { PlatesListContainer } from "./styles";

type Props = {
  plates: [
    {
      id: number;
      foto: string;
      preco: number;
      nome: string;
      descricao: string;
      porcao: string;
    }
  ];
};


const PlatesList = ({ plates }: Props) => {
  return (
    <PlatesListContainer className="container">
      {plates.map((plate) => (
        <Plate
          key={plate.id}
          id={plate.id}
          descricao={plate.descricao}
          foto={plate.foto}
          nome={plate.nome}
          porcao={plate.porcao}
          preco={plate.preco}
        />
      ))}
    </PlatesListContainer>
  );
};

export default PlatesList;
