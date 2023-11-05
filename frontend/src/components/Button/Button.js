import styled, { css } from "styled-components"
import { Link } from "react-router-dom";

export const borderStyle = css`
    &::after,
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        transition: .2s linear;
    }

    &::after {
        top: -5px;
        right: -5px;
        border: 2px solid #002B5B;
    }

    &::before {
        bottom: -5px;
        left: -5px;
        background-color: ${props => props.color || "#EA5455"}; 
        z-index: -1;
    }
`

export const ButtonLink = styled(Link)`
    position: relative;
    padding: 5px 10px;
    border: none;
    text-align: center;
    font-weight: 600;

    &#errorBtn {
        margin-top: 20px;
    }

    ${borderStyle}

    &:hover {
        &::after {
            transform: translate(-5px, 5px);
        }

        &::before {
            transform: translate(3px, -3px);
        }
    }

    @media (orientation: landscape) and (max-width: 1000px) {
        font-size: 1.8rem;
    }

    @media (orientation: portrait) and (max-width: 440px) {
        font-size: 1.8rem;
    }

    @media (orientation: portrait) and (max-width: 300px) {
        font-size: 1.5rem;
    }
`

const Button = styled.button`
    font-family: 'Bebas Neue', sans-serif;
    text-align: center;
    color: #002B5B;
    background-color: transparent;
    border: none;
`

export const ButtonClose = styled(Button)`
    font-size: 2.5rem;
    transition: .2s linear;

    &:hover {
        transform: rotate(-90deg);
    }
`

export const ButtonActionNote = styled(Button)`
    position: relative;
    padding: 0 10px;
    z-index: 10;
    font-size: ${props => props.size || "2.5rem"};

    ${borderStyle}

    &:hover {
        &::after {
            transform: translate(-3px, 3px);
        }

        &::before {
            transform: translate(5px, -5px);
        }
    }

    @media (orientation: portrait) and (max-width: 440px) {
        font-size: 2rem;
    }

    @media (orientation: portrait) and (max-width: 300px) {
        font-size: 1.8rem;
    }
`