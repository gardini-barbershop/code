import Modal from "react-modal";
import Header from "../components/Header";
import Button from "../components/button";
import Carousel from "../components/carousel";
import Pattern from "../components/svg/brick-pattern";
import * as S from "./styles";
import { Button as ButtonModal } from "../components/button/styles";
import { useState } from "react";
import { pricing } from "../content/pricing";

const home = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      backgroundColor: "#002707",
      borderRadius: "5px",
      height: "90%",
    },
  };

  return (
    <main style={{height: "100vh"}}>
      <Header />
      <S.CarouselContent>
        <Carousel></Carousel>
      </S.CarouselContent>
      <S.Content>
        <Pattern />
        <S.ButtonWrapper>
          <Button name="Whatsapp" action="enviar" icon="Whatsapp"></Button>
          <Button name="Instagram" action="enviar" icon="Instagram"></Button>
          <Button name="Maps" action="enviar" icon="Maps"></Button>
          <ButtonModal
            onClick={() => {
              openModal();
            }}
          >
            <p className="ajustar"><img alt="Ícone" src="./icon-valores.png"></img></p>Valores
          </ButtonModal>
        </S.ButtonWrapper>
        <S.Agenda>O melhor momento do seu dia é na Barbearia Gardini!</S.Agenda>
        <S.Horarios>
          <div>
            <p>SEGUNDA À SEXTA</p>
            <p>SÁBADOS</p>
          </div>
          <div>
            <p>9:00h ÀS 20:00h</p>
            <p>8:00h ÀS 17:00h</p>
          </div>
        </S.Horarios>
      </S.Content>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <S.Info>
          <h2 style={{ textAlign: "center", padding: "32px 0" }}>
            Venha conhecer <br />
            nossa tabela de preços!
          </h2>
          <ul>
            {pricing.map((element, index) => {
              return (
                <li id={`${index}`}>
                  <span>{element.servico}</span> <span>{element.valor}</span>
                </li>
              );
            })}
          </ul>

          <div style={{ textAlign: "center", padding: "32px 0" }}>
            Última vez atualizado em <br />
            <u>09/07/2024</u>
          </div>
          <button
            onClick={() => {
              closeModal();
            }}
          >
            Fechar
          </button>
        </S.Info>
      </Modal>
    </main>
  );
};

export default home;
