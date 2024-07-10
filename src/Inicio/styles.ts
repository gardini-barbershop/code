import styled from "styled-components";

export const CarouselContent = styled.div`
  height: 35vh;
  position: relative;

  & > div {
    height: 35vh;
  }

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

export const Content = styled.div`
  background-color: #002707;
  padding: 24px;
  height: 65vh;
  position: relative;
  z-index: 0;
  & > svg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    & > path {
      width: 100%;
    }
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  & > button {
    width: 100%;
  }

  & > button + button {
    margin-top: 24px;
  }
`;

export const Agenda = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 16px;
  font-family: "Roboto Slab", serif;
  text-align: center;
`;

export const Horarios = styled.div`
  margin-top: 24px;
  display: flex;
  color: #fff;
  font-size: 16px;
  font-family: "Roboto Slab", serif;
  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  & > div:last-child {
    & > p {
      width: 100%;
      text-align: right;
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #fff; 
  border-radius: 5px;
  position: relative;
  color: #fff;
  font-family: "Roboto Slab", serif;
  & > * {
    font-family: "Roboto Slab", serif;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
  & > ul {
    max-height: 45%;
    overflow-y: auto;
    list-style: none;
    padding: 0;
    & > li {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      padding: 8px 16px;
    }
    & li + li {
      border-top: 1px solid #fff;
    }
    & li:first-child {
      border-top: 1px solid #fff;
    }
    & li:last-child {
      border-bottom: 1px solid #fff;
    }
  }

  & > button {
    width: calc(100% - 48px);
    position: absolute;
    bottom: 40px;
    margin-left: 24px;
    padding: 8px 16px;
    background-color: #002707;
    border: 1px solid #fff;
    border-radius: 16px;
  }
`;
