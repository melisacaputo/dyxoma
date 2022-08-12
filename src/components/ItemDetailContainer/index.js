import { useState, useEffect } from "react";
import { products } from "../../utils/products";
import { customFetch } from "../../utils/customFetch";
import ItemDetail from "../ItemDetail";
import { Spinner } from "reactstrap";

const ItemDetailContainer = () => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    customFetch(products).then((res) => {
      setSelectedProduct(res.find((prod) => prod.id === 1));
      setLoad(true);
    });
  }, []);

  return (
    <>
      {load ? (
        <ItemDetail selectedProduct={selectedProduct} />
      ) : (
        <div className="load">
          <Spinner color="light"></Spinner>
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
