import styled from "styled-components"
import { Wrapper } from "../Wrapper/Wrapper"

export const WrapperPageNotes = styled(Wrapper)`
    align-items: center;
    flex-direction: column;
    padding-top: 15px;
`

export const WrapperNotes = styled.section`
    padding: 40px 0;
    width: 80vw;
    
    & > div {
        width: 100%;
    }

    @media (orientation: portrait) and (max-width: 440px) {
        width: 90vw;
        padding: 25px 0;
        font-size: 1.8rem;
    }
`

export const WrapperNotesInfo = styled.div`
    text-align: center;

    & > button {
        margin-top: 15px;
    }
`

export const WrapperNote = styled.div`
    background-color: #E4DCCF;
    padding: 25px 10px 10px 10px;

    & > button {
        margin: 0 20px 15px 0;
    }

    & > p {
        word-break: break-word;
    }
`