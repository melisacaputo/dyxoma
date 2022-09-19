import "./style.scss";
import Modal from "../Modal";
import { useModal } from "../../customHooks/useModal";
import { useState } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { useCartContext } from "../../context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const Checkout = () => {
  const { cartList, totalPrice, emptyCart } = useCartContext();
  const [purchase, setPurchase] = useState("");
  const navigate = useNavigate();

  const [isOpenSuccess, openModalSuccess, closeModalSuccess] = useModal(false);
  const [isOpenError, openModalError, closeModalError] = useModal(false);

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

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then((res) => {
        setPurchase(res.id);
        openModalSuccess();
      })
      .catch((err) => {
        openModalError();
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
          required
          value={buyer.nombre}
          onChange={handleChangeInput}
        />
      </FormGroup>
      <FormGroup>
        <Label for="tel">Teléfono</Label>
        <Input
          id="tel"
          name="tel"
          type="number"
          bsSize="sm"
          required
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
          required
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
              type="text"
              bsSize="sm"
              required
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
              type="text"
              bsSize="sm"
              required
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
              type="text"
              bsSize="sm"
              required
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
              type="text"
              required
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
              type="number"
              bsSize="sm"
              required
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

      <Modal isOpen={isOpenSuccess} closeModal={closeModalSuccess}>
        <h3> Tu compra se procesó correctamente :)</h3>
        <p>Recibirás un mail con el detalle de tu compra</p>
        <p> Número de orden: {purchase}</p>

        <Button
          size="sm"
          color="dark"
          onClick={emptyCart}
          style={{
            marginRight: "1rem",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              backgroundColor: "transparent",
            }}
          >
            Volver al inicio
          </Link>
        </Button>
      </Modal>

      <Modal isOpen={isOpenError} closeModal={closeModalError}>
        <h3>Ocurrió un error al procesar tu compra</h3>
        <p>Por favor intenta nuevamente</p>
      </Modal>
    </Form>
  );
};

export default Checkout;
