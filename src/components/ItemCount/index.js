import { useState } from "react";
import { Button } from "reactstrap";
import "./style.scss";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);
  const increase = () => count < stock && setCount(count + 1);
  const decrease = () => count > initial && setCount(count - 1);

  return (
    <div className="cart-container">
      <Button color="dark" outline size="sm" onClick={decrease}>
        -
      </Button>
      <p>{count}</p>
      <Button color="dark" outline size="sm" onClick={increase}>
        +
      </Button>
      <Button
        color="dark"
        outline
        size="sm"
        disabled={stock === 0 && "disabled"}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
