import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.gif";
import CartWidget from "../CartWidget";
import "./style.scss";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div>
          <Link to="/">
            <img src={logo} alt="logo dyxoma gif" width={80} />
          </Link>
        </div>

        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <NavLink className="nav-link" to="category/remeras">
            <li>Remeras</li>
          </NavLink>
          <NavLink className="nav-link" to="category/camperas">
            <li>Camperas</li>
          </NavLink>
          <NavLink className="nav-link" to="category/buzos">
            <li>Buzos</li>
          </NavLink>
          <NavLink className="nav-link" to="category/tops">
            <li>Tops</li>
          </NavLink>
          <NavLink className="nav-link" to="category/accesorios">
            <li>Accesorios</li>
          </NavLink>
        </ul>

        <div>
          <CartWidget></CartWidget>
        </div>

        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
