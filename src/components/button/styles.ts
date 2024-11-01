import styled from "styled-components";

export const Button = styled.button`
    text-align: center;
    position: relative;
    padding: 2px 0 4px;
    border-radius: 5px;
    background-color: #1FA637;
    border: 2px solid #ffffff;
    color: #fff;
    font-size: 20px;
    font-family: "Roboto Slab", serif;
    & > p {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 12px;
        &.ajustar{
            left: 17px;
        }
    }
`;