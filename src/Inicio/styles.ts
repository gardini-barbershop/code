import styled from "styled-components";

const GREEN = "#002707";
const FONT = `"Roboto Slab", serif`;
const DESKTOP = "(min-width: 900px)";

export const Page = styled.main`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background-color: ${GREEN};
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media ${DESKTOP} {
    flex-direction: row;
  }
`;

export const CarouselContent = styled.div`
  height: 35vh;
  height: 35dvh;
  min-height: 220px;
  position: relative;

  & > div,
  & .swiper,
  & .swiper-wrapper,
  & .swiper-slide,
  & img {
    height: 100%;
  }

  & img {
    width: 100%;
    object-fit: cover;
  }

  /* Escurece o carrossel sem bloquear o swipe/clique nele */
  &::after {
    position: absolute;
    content: "";
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    pointer-events: none;
    z-index: 1;
  }

  @media ${DESKTOP} {
    flex: 1 1 55%;
    height: auto;
    min-height: 0;

    /* Altura percentual não resolve em item flex: posiciona para preencher a coluna */
    & > div {
      position: absolute;
      inset: 0;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  background-color: ${GREEN};

  & > svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }

  @media ${DESKTOP} {
    flex: 0 0 45%;
    padding: 48px 64px;
  }

  @media (min-width: 1600px) {
    flex-basis: 40%;
  }
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 420px;
  margin-inline: auto;

  @media ${DESKTOP} {
    max-width: 520px;
  }
`;

export const ButtonWrapper = styled.div`
  display: grid;
  gap: 16px;

  & > button {
    width: 100%;
  }

  /* Desktop: 4 botões em grade 2x2 */
  @media ${DESKTOP} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

export const Agenda = styled.h1`
  margin: 32px 0 0;
  color: #fff;
  font-family: ${FONT};
  font-size: clamp(1rem, 0.9rem + 1vw, 1.75rem);
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
`;

export const Horarios = styled.dl`
  margin: 24px 0 0;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 16px;
  color: #fff;
  font-family: ${FONT};
  font-size: 1rem;

  & > dt,
  & > dd {
    margin: 0;
  }

  & > dd {
    text-align: right;
  }
`;

export const Powered = styled.div`
  margin-top: 24px;
  color: #eee;
  font-family: ${FONT};
  font-size: 0.75rem;
  text-align: center;

  & > a {
    color: #eee;
    text-decoration: none;
  }

  & > a:hover,
  & > a:focus-visible {
    text-decoration: underline;
  }
`;

export const Info = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  font-family: ${FONT};
  font-size: 1rem;
  font-weight: 700;

  & > h2 {
    margin: 0;
    padding: 24px 16px;
    font-size: clamp(1.125rem, 0.9rem + 1.2vw, 1.5rem);
    line-height: 1.3;
    text-align: center;
  }

  /* A lista rola; o título e o rodapé ficam sempre visíveis */
  & > ul {
    flex: 1;
    min-height: 0;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    list-style: none;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }

  & > ul > li {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 12px 16px;
  }

  & > ul > li + li {
    border-top: 1px solid #fff;
  }

  & > ul > li > span:last-child {
    white-space: nowrap;
  }
`;

export const InfoFooter = styled.div`
  padding: 16px 24px 24px;
  text-align: center;

  & > p {
    margin: 0 0 16px;
    font-size: 0.875rem;
  }
`;

export const CloseButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #fff;
  border-radius: 16px;
  background-color: ${GREEN};
  color: #fff;
  font-family: ${FONT};
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`;
