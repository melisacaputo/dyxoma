import "./style.scss";
import { BsBag } from "react-icons/bs";
import { Badge } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <NavLink to="/cart" className="bag-icon">
      <BsBag />
      <Badge pill>{totalQuantity()}</Badge>
    </NavLink>
  );
};

export default CartWidget;
