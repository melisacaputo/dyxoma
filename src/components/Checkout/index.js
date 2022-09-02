import "./style.scss";
import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { useNavigate, Link } from "react-router-dom";

const Checkout = () => {
  const { cartList, totalPrice, emptyCart } = useCartContext();
  const navigate = useNavigate();
  const [modalSuccess, setModalSucces] = useState(false);
  const [ord, setOrd] = useState("");
  const toggle = () => setModalSucces(!modalSuccess);

  const [buyer, setBuyer] = useState({
    nombre: "",
    tel: "",
    email: "",
    direcc: "",
    piso: "",
    prov: "",
    loc: "",
    cp: "",
  });

  const handleChangeInput = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirm = () => {
    const order = {
      items: cartList,
      total: totalPrice(),
      buyer: { ...buyer },
      date: serverTimestamp(),
    };
    console.log(order);
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then((res) => {
        setModalSucces(true);
        setOrd(res.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (cartList.length === 0) {
    setTimeout(() => {
      navigate("/");
    }, 3000);

    return (
      <div className="empty-cart">
        <p>No hay productos en tu carrito</p>
        <p>Serás redirigido al inicio en 3 segundos...</p>
      </div>
    );
  }

  return (
    <Form className="form-container">
      <FormGroup>
        <Label for="nombre">Nombre</Label>
        <Input
          id="nombre"
          name="nombre"
          type="text"
          bsSize="sm"
          value={buyer.nombre}
          onChange={handleChangeInput}
        />
      </FormGroup>
      <FormGroup>
        <Label for="tel">Teléfono</Label>
        <Input
          id="tel"
          name="tel"
          bsSize="sm"
          value={buyer.tel}
          onChange={handleChangeInput}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          bsSize="sm"
          value={buyer.email}
          onChange={handleChangeInput}
        />
      </FormGroup>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="direcc">Dirección</Label>
            <Input
              id="direcc"
              name="direcc"
              bsSize="sm"
              value={buyer.direcc}
              onChange={handleChangeInput}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="piso">Piso / Depto</Label>
            <Input
              id="piso"
              name="piso"
              bsSize="sm"
              value={buyer.piso}
              onChange={handleChangeInput}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          <FormGroup>
            <Label for="prov">Provincia</Label>
            <Input
              id="prov"
              name="prov"
              bsSize="sm"
              value={buyer.prov}
              onChange={handleChangeInput}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="loc">Localidad</Label>
            <Input
              id="loc"
              name="loc"
              bsSize="sm"
              value={buyer.loc}
              onChange={handleChangeInput}
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="cp">Código Postal</Label>
            <Input
              id="cp"
              name="cp"
              bsSize="sm"
              value={buyer.cp}
              onChange={handleChangeInput}
            />
          </FormGroup>
        </Col>
      </Row>
      <Button
        color="dark"
        outline
        className="btn-confirm"
        onClick={handleConfirm}
      >
        Confirmar compra
      </Button>

      {modalSuccess && (
        <Modal isOpen={modalSuccess} toggle={handleConfirm}>
          <ModalHeader>
            Tu compra se proceso correctamente. Número de orden: {ord}
          </ModalHeader>
          <ModalFooter>
            <Button color="dark" onClick={emptyCart}>
              <Link to="/">Ir al inicio</Link>
            </Button>{" "}
            <Button color="dark" onClick={toggle}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </Form>
  );
};

export default Checkout;
