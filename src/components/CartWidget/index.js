import "./style.scss";
import { BsBag } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  return (
    <NavLink to="/cart" className="bag-icon">
      <BsBag />
    </NavLink>
  );
};

export default CartWidget;
