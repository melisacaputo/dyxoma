import { Card, CardTitle, CardText, Button, Col } from "reactstrap";
import "./style.scss";

const ItemDetail = ({ selectedProduct }) => {
  return (
    <div className="item-container">
      <Col sm="6">
        <Card color="black" body>
          <CardTitle>{selectedProduct.name}</CardTitle>
          <CardText>${selectedProduct.price}</CardText>
          <Button>Agregar al carrito</Button>
        </Card>
      </Col>
    </div>
  );
};

export default ItemDetail;
