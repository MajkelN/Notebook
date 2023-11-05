import styled from "styled-components"

export const WrapperHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0;

    @media (orientation: landscape) and (max-width: 1000px) {
        & > a > h1 {
            font-size: 3.5rem;
        }
    }

    @media (orientation: landscape) and (max-width: 700px) {
        & > a > h1 {
            font-size: 3rem;
        }
    }

    @media (orientation: portrait) and (max-width: 440px) {
        & > a > h1 {
            font-size: 3.5rem;
        }
    }

    @media (orientation: portrait) and (max-width: 300px) {
        & > a > h1 {
            font-size: 2.5rem;
        }
    }
`

export const WrapperNav = styled.nav`
    display: flex;
    gap: 40px;

    @media (orientation: portrait) and (max-width: 350px) {
        gap: 20px;
    }
`
