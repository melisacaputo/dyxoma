import { FaRegTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { useCartContext } from "../../context/CartContext";
import "./style.scss";

const Cart = () => {
  const { cartList, removeFromCart, emptyCart, totalPrice } = useCartContext();

  if (cartList.length > 0) {
    return (
      <div className="cart-view">
        <Table dark hover responsive size="">
          <thead>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((prod, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img
                      src={prod.image}
                      alt={prod.name}
                      width="100"
                      height="100"
                    />
                  </td>
                  <td>{prod.name}</td>
                  <td>${prod.price}</td>
                  <td>{prod.quantity}</td>
                  <td>
                    <Button
                      onClick={() => removeFromCart(prod.id)}
                      className="btn-remove"
                    >
                      <FaRegTimesCircle />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <p className="total-price">Precio total: ${totalPrice()}</p>

        <div className="btn-containter">
          <Button color="dark" outline className="btn-cart">
            <Link to="/checkout">Continuar con la compra</Link>
          </Button>
          <Button
            color="dark"
            outline
            onClick={() => emptyCart()}
            className="btn-cart"
          >
            Vaciar carrito
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="empty-cart">
      <p>No hay productos en tu carrito</p>
      <Link to="/">
        <Button color="dark" outline>
          Volver al inicio
        </Button>
      </Link>
    </div>
  );
};

export default Cart;
