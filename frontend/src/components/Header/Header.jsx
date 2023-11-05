import { useIsAuthenticated, useSignOut } from "react-auth-kit"
import { useNavigate } from "react-router-dom";
import { WrapperHeader, WrapperNav } from "./Header.js";
import { ButtonLink } from "../Button/Button.js";
import { Link } from "react-router-dom";

export default function Header() { 
    const isAuthenticated = useIsAuthenticated();
    const signOut = useSignOut();
    const navigate = useNavigate();

    const logout = () => {
        signOut();
        navigate("/login")
    }

    return (
        <WrapperHeader>
            <Link to="/"><h1>Notebook</h1></Link>
            <WrapperNav>
                {isAuthenticated() ? <ButtonLink to="/notes">Notes</ButtonLink> : null}
                {isAuthenticated() ? <ButtonLink to="/" onClick={logout}>Log out</ButtonLink> : null}
                {isAuthenticated() ? null : <ButtonLink to="/login">Log in</ButtonLink>}
                {isAuthenticated() ? null : <ButtonLink to="/register">Sing up</ButtonLink>}
            </WrapperNav>
        </WrapperHeader>
    )
}
