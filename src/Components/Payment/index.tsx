import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";

import { RootReducer } from "../../store";
import { usePurchaseMutation } from "../../services/api";
import {
  openAddress,
  closePaymemt,
  addCardInfos,
} from "../../store/reducers/cart";
import { formataPreco } from "../Modal";

import { Aside, Button, Overlay } from "../Cart/styles";
import * as S from "./styles";

const Payment = () => {
  const [purchase] = usePurchaseMutation();
  const { paymentOpen, items, clientAddress, clientCard } = useSelector(
    (state: RootReducer) => state.cart
  );
  const dispatch = useDispatch();

  const backToPayment = () => {
    dispatch(openAddress());
    dispatch(closePaymemt());
  };

  const getTotalPrice = () => {
    return items.reduce((acum, valorAtual) => {
      return (acum += valorAtual.preco!);
    }, 0);
  };

  const form = useFormik({
    initialValues: {
      cardName: "",
      cardNumber: "",
      cardCode: "",
      expiresMonth: "",
      expiresYear: "",
    },
    validationSchema: Yup.object({
      cardName: Yup.string().min(5).required(),
      cardNumber: Yup.string().min(19).max(19).required(),
      cardCode: Yup.string().min(3).max(3).required(),
      expiresMonth: Yup.string().min(2).max(2).required(),
      expiresYear: Yup.string().min(2).max(2).required(),
    }),
    onSubmit: (values) => {
      dispatch(
        addCardInfos({
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear),
              },
            },
          },
        })
      );

      purchase({
        products: clientAddress.products,
        delivery: clientAddress.delivery,
        payment: clientCard.payment
      });
    },
  });

  const checkInputHasError = (fieldname: string) => {
    const isTouched = fieldname in form.touched;
    const isInvalid = fieldname in form.errors;
    const hasError = isInvalid && isTouched;

    return hasError;
  };

  const handleSendTicket = () => {
    form.handleSubmit;
  };

  return (
    <form onSubmit={form.handleSubmit}>
      <S.Container className={paymentOpen ? "payment-is-open" : ""}>
        <Overlay />
        <Aside>
          <h3>Pagamento - Valor a pagar {formataPreco(getTotalPrice())}</h3>

          <S.Row>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              name="cardName"
              id="cardName"
              type="text"
              value={form.values.cardName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError("cardName") ? "has-error" : ""}
            />
          </S.Row>

          <S.Row className="mid-size">
            <div>
              <label htmlFor="cardNumber">Número no cartão</label>
              <InputMask
                name="cardNumber"
                id="cardNumber"
                type="text"
                style={{ width: 228 }}
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError("cardNumber") ? "has-error" : ""}
                mask="9999 9999 9999 9999"
              />
            </div>
            <div>
              <label htmlFor="cardCode">CVV</label>
              <InputMask
                name="cardCode"
                id="cardCode"
                type="text"
                style={{ width: 87 }}
                value={form.values.cardCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError("cardCode") ? "has-error" : ""}
                mask="999"
              />
            </div>
          </S.Row>

          <S.Row className="mid-size">
            <div>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <InputMask
                name="expiresMonth"
                id="expiresMonth"
                type="text"
                value={form.values.expiresMonth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={
                  checkInputHasError("expiresMonth") ? "has-error" : ""
                }
                mask="99"
              />
            </div>
            <div>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <InputMask
                name="expiresYear"
                id="expiresYear"
                type="text"
                value={form.values.expiresYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError("expiresYear") ? "has-error" : ""}
                mask="99"
              />
            </div>
          </S.Row>

          <Button
            onClick={handleSendTicket}
            disabled={!form.isValid}
            title="Continuar com a compra"
            type="submit"
            className="payment-button"
          >
            Finalizar pagamento
          </Button>
          <Button
            title="Voltar para o carrinho"
            type="button"
            onClick={backToPayment}
          >
            Voltar para a edição de endereço
          </Button>
        </Aside>
      </S.Container>
    </form>
  );
};

export default Payment;
