import "./style.scss";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

function Item({ product }) {
  return (
    <Card
      color="dark"
      style={{
        width: "18rem",
        margin: "1rem",
      }}
    >
      <img alt={product.name} src={product.image} className="product-img" />
      <CardBody>
        <CardTitle tag="h5">{product.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          ${product.price}
        </CardSubtitle>
        <Button>
          <NavLink className="btn-detalle" to={`product/${product.id}`}>
            Ver detalle
          </NavLink>
        </Button>
      </CardBody>
    </Card>
  );
}

export default Item;
