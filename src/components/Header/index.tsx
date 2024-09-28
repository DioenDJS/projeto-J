import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.png";

export function Header() {
    return (
        <HeaderContainer>
            <div>
                <img src={logo} alt="" />
                <span>Juridico</span>
            </div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Service">Serviços</NavLink>
                <NavLink to="/AboutUs">Sobre nós</NavLink>
            </nav>
        </HeaderContainer>
    )
}