import * as S from "./styles";

import exemplo from "../../assets/images/pizza_marguerita.png";
import botaoFechar from "../../assets/images/botao_fechar.png";

import { Button } from "../Plate/styles";

const Modal = () => {
  

  return (
    <S.Modal>
      <S.ModalContent>
        <button>
          <img src={botaoFechar} alt="botão fechar" />
        </button>
        <img src={exemplo} alt="Nome do prato" />

        <div>
          <h3>Pizza Marguerita</h3>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião. <br /> <br />
            Serve de: 2 a 3 pessoas
          </p>
          <Button>Adicionar ao carrinho - R$ 60,90</Button>
        </div>
      </S.ModalContent>
      <div className="overlay"></div>
    </S.Modal>
  );
};

export default Modal;
