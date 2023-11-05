import { useRouteError } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { WrapperError } from "../components/Wrapper/Wrapper";
import { ButtonLink } from "../components/Button/Button";

export default function Error() {
    const error = useRouteError();

    return (
        <WrapperError id="error-page">
            <h2>Oops!</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            <p id="errorMessage">
                <i>{error.statusText || error.message}</i>
            </p>
            <ButtonLink id="errorBtn" to="/"><FontAwesomeIcon icon={faCircleArrowLeft} /> Return to home page</ButtonLink>
        </WrapperError>
    );
}