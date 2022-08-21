import "./style.scss";
import logo from "../../assets/logo.gif";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <img src={logo} alt="logo dyxoma gif" width={80} />
          </NavLink>
        </li>
        <li>
          <NavLink to="category/remeras">Remeras</NavLink>
        </li>
        <li>
          <NavLink to="category/camperas">Camperas</NavLink>
        </li>
        <li>
          <NavLink to="category/buzos">Buzos</NavLink>
        </li>
        <li>
          <NavLink to="category/tops">Tops</NavLink>
        </li>
        <li>
          <NavLink to="category/accesorios">Accesorios</NavLink>
        </li>
        <li>
          <CartWidget>{props.children}</CartWidget>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
