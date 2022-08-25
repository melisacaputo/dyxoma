import "./style.scss";
import { BsBag } from "react-icons/bs";
import { Badge } from "reactstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

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
