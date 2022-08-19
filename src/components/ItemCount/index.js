import "./style.scss";
import { Button } from "reactstrap";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);
  const increase = () => count < stock && setCount(count + 1);
  const decrease = () => count > initial && setCount(count - 1);

  return (
    <div className="counter-container">
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
        onClick={onAdd}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
