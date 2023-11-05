import { styled } from "styled-components"

const WrapperFooter = styled.footer`
    background-color: #EA5455;
    padding: 5px 0;
    text-align: center;

    @media (orientation: portrait) and (max-width: 440px) {
        font-size: 1.8rem;
    }
`

export default function Footer() { 
    return (
        <WrapperFooter>
            © 2023 Michał Nieścior. All rights reserved
        </WrapperFooter>
    )
}
