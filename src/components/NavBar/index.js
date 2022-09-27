import { Link } from "react-router-dom";
import logo from "../../assets/logo.gif";
import CartWidget from "../CartWidget";
import "./style.scss";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="logo dyxoma gif" width={80} />
            </Link>
          </li>
          <li>
            <Link to="category/remeras">Remeras</Link>
          </li>
          <li>
            <Link to="category/camperas">Camperas</Link>
          </li>
          <li>
            <Link to="category/buzos">Buzos</Link>
          </li>
          <li>
            <Link to="category/tops">Tops</Link>
          </li>
          <li>
            <Link to="category/accesorios">Accesorios</Link>
          </li>
          <li>
            <CartWidget></CartWidget>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
