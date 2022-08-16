import "./style.scss";
import { Card, CardTitle, CardText, CardBody } from "reactstrap";
import ItemCount from "../ItemCount";

const ItemDetail = ({ selectedProduct }) => {
  return (
    <div className="item-container">
      <Card color="black" body>
        <img src={selectedProduct.image} alt={selectedProduct.name} />
        <CardBody>
          <CardTitle>{selectedProduct.name}</CardTitle>
          <CardText>${selectedProduct.price}</CardText>
          <ItemCount
            initial={1}
            stock={selectedProduct.stock}
            onAdd={() => {}}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default ItemDetail;
