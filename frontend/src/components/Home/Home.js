import styled from "styled-components"
import { WrapperNav } from "../Header/Header"

export const WrapperHomeNav = styled(WrapperNav)`
    margin-top: 20px;
`

export const WrapperHome = styled.main`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    justify-items: center;
    align-items: center;
    gap: 100px;
    padding: 0 200px;

    @media (orientation: landscape) and (max-width: 1350px) {
        padding: 0 150px;
    }

    @media (orientation: landscape) and (max-width: 1100px) {
        padding: 0 100px;
        gap: 50px;
    }

    @media (orientation: landscape) and (max-width: 1000px) {
        padding: 25px 100px;
    }

    @media (orientation: landscape) and (max-width: 700px) {
        padding: 25px 50px;
    }

    @media (orientation: portrait) and(max-width: 1000px) {
        padding: 0 50px;
        gap: 50px;
    }

    @media (orientation: portrait) and (max-width: 950px) {
        flex-direction: row;
        grid-template-columns: 1fr;
        padding: 50px 100px 100px 100px;
        gap: 0px;
    }

    @media (orientation: portrait) and (max-width: 700px) {
        padding: 0 70px 100px 70px;
    }

    @media (orientation: portrait) and (max-width: 600px) {
        padding: 50px;
    }

    @media (orientation: portrait) and (max-width: 440px) {
        padding: 25px;
    }
`

export const WrapperTitle = styled.div`
    & > h2 {
        font-size: 7rem;
    }

    @media (orientation: landscape) and (max-width: 1350px) {
        & > h2 {
            font-size: 6rem;
        }
    }

    @media (orientation: landscape) and (max-width: 1100px) {
        & > h2 {
            font-size: 5rem;
        }
        & > p {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 1000px) {
        & > h2 {
            font-size: 4rem;
        }
    }

    @media (orientation: landscape) and (max-width: 1000px) {
        & > h2 {
            font-size: 3.5rem;
        }
    }

    @media (orientation: landscape) and (max-width: 700px) {
        & > h2 {
            font-size: 3rem;
        }
        & > p {
            font-size: 1.5rem;
        }
    }

    @media (orientation: portrait) and (max-width: 950px) {
        grid-row: 2 / end;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        text-align: center;
    }

    @media (orientation: portrait) and (max-width: 440px) {
        & > h2 {
            font-size: 3rem;
        }

        & > p {
            font-size: 1.8rem;
        }
    }
`

export const WrapperIllustration = styled.div`
    &>svg {
        width: 100%;
        height: 100%;
    }

    @media (orientation: portrait) and (max-width: 950px) {
        text-align: center;

        & > svg {
            width: 90%;
        }
    }

    @media (orientation: portrait) and (max-width: 700px) {
        & > svg {
            width: 100%;
        }
    }

    @media (orientation: portrait) and (max-width: 600px) {
        & > svg {
            height: 80%;
        }
    }
`