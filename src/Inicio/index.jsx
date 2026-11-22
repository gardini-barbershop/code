import { useState } from "react";
import Modal from "react-modal";
import Header from "../components/header";
import Button from "../components/button";
import Carousel from "../components/carousel";
import Pattern from "../components/svg/brick-pattern";
import { Button as ButtonModal } from "../components/button/styles";
import { pricing } from "../content/pricing";
import * as S from "./styles";

Modal.setAppElement("#root");

const PRICING_UPDATED_AT = { label: "22/11/2026", iso: "2026-11-22" };

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 10,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "min(92vw, 560px)",
    height: "min(90dvh, 720px)",
    padding: 0,
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#002707",
  },
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Page>
      <Header />
      <S.Body>
        <S.CarouselContent>
          <Carousel />
        </S.CarouselContent>

        <S.Content>
          <Pattern />

          <S.Inner>
            <S.ButtonWrapper>
              <Button name="Whatsapp" action="enviar" icon="Whatsapp" />
              <Button name="Instagram" action="enviar" icon="Instagram" />
              <Button name="Maps" action="enviar" icon="Maps" />
              <ButtonModal type="button" onClick={() => setIsOpen(true)}>
                <p className="ajustar">
                  <img src="/icon-valores.png" alt="" aria-hidden="true" />
                </p>
                Valores
              </ButtonModal>
            </S.ButtonWrapper>

            <S.Agenda>O melhor momento do seu dia é na Barbearia Gardini!</S.Agenda>

            <S.Horarios>
              <dt>Segunda a sexta</dt>
              <dd>9h às 20h</dd>
              <dt>Sábados</dt>
              <dd>8h às 17h</dd>
            </S.Horarios>

            <S.Powered>
              Powered by @{" "}
              <a href="https://www.faello.tech" target="_blank" rel="noopener noreferrer">
                Faello.tech
              </a>
            </S.Powered>
          </S.Inner>
        </S.Content>
      </S.Body>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={modalStyles}
        aria={{ labelledby: "precos-titulo" }}
      >
        <S.Info>
          <h2 id="precos-titulo">
            Venha conhecer <br />
            nossa tabela de preços!
          </h2>

          <ul>
            {pricing.map((item) => (
              <li key={item.servico}>
                <span>{item.servico}</span>
                <span>{item.valor}</span>
              </li>
            ))}
          </ul>

          <S.InfoFooter>
            <p>
              Atualizado em{" "}
              <time dateTime={PRICING_UPDATED_AT.iso}>{PRICING_UPDATED_AT.label}</time>
            </p>
            <S.CloseButton type="button" onClick={() => setIsOpen(false)}>
              Fechar
            </S.CloseButton>
          </S.InfoFooter>
        </S.Info>
      </Modal>
    </S.Page>
  );
};

export default Home;
