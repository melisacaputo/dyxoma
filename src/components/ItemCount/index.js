import { Button } from "reactstrap";
import "./style.scss";

const ItemCount = ({ quantity, setQuantity, stock, onAdd }) => {
  const increase = () => quantity < stock && setQuantity(quantity + 1);
  const decrease = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div className="counter-container">
      <Button color="dark" outline size="sm" onClick={decrease}>
        -
      </Button>
      <p>{quantity}</p>
      <Button color="dark" outline size="sm" onClick={increase}>
        +
      </Button>
      <Button
        color="dark"
        outline
        size="sm"
        disabled={stock === 0 && "disabled"}
        onClick={onAdd}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
