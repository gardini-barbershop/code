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
    background: rgba(0,0,0,0.5);
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
    margin-top: 60px;
    color: #fff;
    font-size: 18px;
    font-family: "Roboto Slab", serif;
    text-align: center;
    `;

export const Horarios = styled.div`
    margin-top: 60px;
    display: flex;
    color: #fff;
    font-size: 18px;
    font-family: "Roboto Slab", serif;
    & > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    & > div:last-child {
        margin-top: 8px;
        & > p {
            width: 100%;
            text-align: right;
        }
    }
`;  