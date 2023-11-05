import styled from "styled-components"
import { Wrapper } from "../Wrapper/Wrapper"
import { borderStyle } from "../Button/Button"

export const WrapperForm = styled(Wrapper)`
    align-items: center;
`

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1;
    padding: 25px 30px;
    background-color: #E4DCCF;

    &#registerForm {
        width: 30vw;
    }

    &#loginForm {
        width: 25vw;
    }

    &#noteForm {
        width: 100%;
        height: 100%;
                
        & > header {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }

    @media (orientation: landscape) and (max-width: 1400px) {
        &#loginForm,
        &#registerForm {
            width: 35vw;
        }
    }

    @media (orientation: landscape) and (max-width: 1100px) {
        &#loginForm,
        &#registerForm {
            width: 40vw;
        }
    }

    @media (orientation: landscape) and (max-width: 1000px) {
        &#loginForm,
        &#registerForm {
            padding: 20px;
            width: 50vw;
        }
    }

    @media (orientation: landscape) and (max-width: 900px) {
        &#loginForm,
        &#registerForm {
            margin: 10px 0 15px 0;
        }
    }

    @media (orientation: landscape) and (max-width: 800px) {
        &#loginForm,
        &#registerForm {
            width: 60vw;
        }
    }

    @media (orientation: landscape) and (max-width: 700px) {
        &#loginForm,
        &#registerForm  {
            padding: 10px;
        }
    }


    @media (orientation: portrait) and (max-width: 1000px) {
        &#loginForm,
        &#registerForm {
            width: 45vw;
        }
    }

    @media (orientation: portrait) and (max-width: 750px) {
        &#loginForm,
        &#registerForm  {
            width: 55vw;
        }
    }

    @media (orientation: portrait) and (max-width: 600px) {
        &#loginForm,
        &#registerForm  {
            width: 65vw;
        }

        &#noteForm {
            padding: 20px;
        }
    }

    @media (orientation: portrait) and (max-width: 500px) {
        &#loginForm,
        &#registerForm  {
            width: 75vw;
        }
    }

    @media (orientation: portrait) and (max-width: 420px) {
        &#loginForm,
        &#registerForm  {
            width: 85vw;
            padding: 20px 20px;
        }
    }

    @media (orientation: portrait) and (max-width: 350px) {
        &#loginForm,
        &#registerForm  {
            width: 90vw;
            padding: 20px 10px;
        }
    }
`
export const Input= styled.input`
    width: 100%;
    padding: 5px;
    margin-top: 15px;
    background-color: #F9F5EB;
    font-size: 20px;
    outline: none;

    @media (orientation: landscape) and (max-width: 1000px)  {
        font-size: 1.5rem;
    }

    @media (orientation: portrait) and (max-width: 300px) {
        font-size: 1.5rem;
    }
`

export const InputText = styled(Input)`
    border: none;
    border-bottom: 2px solid #002B5B;
`

export const InputTextArea = styled.textarea`
    width: 100%;
    height: 200px;
    padding: 5px;
    margin-top: 15px;
    border: none;
    border-bottom: 2px solid #002B5B;
    background-color: #F9F5EB;
    font-size: 20px;
    outline: none;
    resize: none;

    @media (orientation: landscape) and (max-width: 1000px)  {
        font-size: 1.5rem;
    }

    @media (orientation: portrait) and (max-width: 300px) {
        font-size: 1.5rem;
    }
`

export const InputSubmit = styled.button`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    padding: 5px;
    margin: 20px 0 0 0;
    border: none;

    background-color: transparent;
    color: #002B5B;

    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 600;
    z-index: 1;
    transition: .3s linear;

    &#noteInputSubmit {
        font-size: 1.8rem;
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

    @media (orientation: landscape) and (max-width: 1000px)  {
        font-size: 1.5rem;
    }

    @media (orientation: portrait) and (max-width: 1000px) {
        width: 40%;
    }

    @media (orientation: portrait) and (max-width: 350px) {
        width: 50%;
    }

    @media (orientation: portrait) and (max-width: 300px) {
        font-size: 1.5rem;
        width: 100%;
    }
`

export const ErrorItemForm = styled.p`
    color: #EA5455;

    @media (orientation: landscape) and (max-width: 1000px)  {
        font-size: 1.5rem;
    }

    @media (orientation: portrait) and (max-width: 300px) {
        font-size: 1.5rem;
    }
`