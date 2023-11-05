import { Wrapper } from "../Wrapper/Wrapper";
import styled from "styled-components"

export const WrapperModal = styled(Wrapper)`
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 43, 91, 0.5);
    backdrop-filter: blur(5px);
    z-index: 10;
`

export const Modal = styled.div`
    width: 40vw;
    border: 3px solid #002B5B;

    @media (orientation: landscape) and (max-width: 1450px) {
        width: 50vw;
    }

    @media (orientation: landscape) and (max-width: 1200px) {
        width: 60vw;
    }

    @media (orientation: portrait) and (max-width: 1000px) {
        width: 70vw;
    }

    @media (orientation: portrait) and (max-width: 800px) {
        width: 80vw;
    }

    @media (orientation: portrait) and (max-width: 440px) {
        width: 90vw;
    }
`

export const ModalDelete = styled(Modal)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: fit-content;
    padding: 20px 10px 20px 10px;
    background-color: #E4DCCF;

    & > p {
        margin-bottom: 20px;
    }
`