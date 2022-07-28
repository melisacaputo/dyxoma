import "./index.scss";
import logo from "../../assets/logo.gif";
import { Nav, NavItem, NavLink } from "reactstrap";
import CartWidget from "../CartWidget";

const NavBar = () => {
  return (
    <nav>
      <Nav fill justified>
        <img src={logo} alt="logo dyxoma gif" width={80} />
        <NavItem>
          <NavLink href="#">Inicio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Productos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Contacto</NavLink>
        </NavItem>
        <CartWidget />
      </Nav>
    </nav>
  );
};

export default NavBar;
