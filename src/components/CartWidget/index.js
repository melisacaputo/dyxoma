import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap";
import { useCartContext } from "../../context/CartContext";
import "./style.scss";

const CartWidget = () => {
  const { totalQuantity } = useCartContext();

  return (
    <Link to="/cart" className="bag-icon">
      <BsBag />
      <Badge pill>{totalQuantity()}</Badge>
    </Link>
  );
};

export default CartWidget;
