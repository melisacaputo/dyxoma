import "./style.scss";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import { customFetch } from "../../utils/customFetch";
import { products } from "../../utils/products";
import { Spinner } from "reactstrap";
import { useState, useEffect } from "react";

const ItemListContainer = ({ greeting }) => {
  const [productsList, setProductsList] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    customFetch(products).then((res) => {
      setProductsList(res);
      setLoad(true);
    });
  }, []);

  return (
    <>
      <h1 className="greeting">{greeting}</h1>
      <ItemCount initial={1} stock={20} onAdd={() => {}} />
      {load ? (
        <ItemList products={productsList} />
      ) : (
        <div className="load">
          <Spinner color="light"></Spinner>
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
