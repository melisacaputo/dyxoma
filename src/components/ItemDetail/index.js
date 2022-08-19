import "./style.scss";
import { Card, CardTitle, CardText, CardBody, Button } from "reactstrap";
import ItemCount from "../ItemCount";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ItemDetail = ({ selectedProduct }) => {
  const [isAdded, setIsAdded] = useState(false);

  const onAdd = () => {
    setIsAdded(true);
  };

  return (
    <div className="item-container">
      <Card color="black" body>
        <img src={selectedProduct.image} alt={selectedProduct.name} />
        <CardBody>
          <CardTitle>{selectedProduct.name}</CardTitle>
          <CardText>${selectedProduct.price}</CardText>
          {isAdded ? (
            <NavLink to="/cart">
              <Button color="dark" outline size="sm">
                Ir al carrito
              </Button>
            </NavLink>
          ) : (
            <ItemCount
              initial={1}
              stock={selectedProduct.stock}
              onAdd={onAdd}
            />
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default ItemDetail;
