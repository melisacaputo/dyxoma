import { Spinner } from "reactstrap";
import { products } from "../../utils/products";
import { customFetch } from "../../utils/customFetch";
import ItemDetail from "../ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [load, setLoad] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    customFetch(products).then((res) => {
      setSelectedProduct(res.find((prod) => prod.id === parseInt(id)));
      setLoad(true);
    });
  }, [id]);

  return (
    <>
      {load ? (
        <ItemDetail selectedProduct={selectedProduct} />
      ) : (
        <div className="spinner">
          <Spinner color="light"></Spinner>
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
