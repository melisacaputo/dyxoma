import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

function Item({ product }) {
  return (
    <Card
      color="dark"
      style={{
        width: "18rem",
        margin: "1rem",
      }}
    >
      <img alt={product.name} src={product.image} />
      <CardBody>
        <CardTitle tag="h5">{product.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          ${product.price}
        </CardSubtitle>
        <Button>Ver detalle</Button>
      </CardBody>
    </Card>
  );
}

export default Item;
