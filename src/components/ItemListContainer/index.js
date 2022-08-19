import "./style.scss";
import { Spinner } from "reactstrap";
import { products } from "../../utils/products";
import { customFetch } from "../../utils/customFetch";
import ItemList from "../ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [productsList, setProductsList] = useState([]);
  const [load, setLoad] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    setLoad(false);
    customFetch(products).then((res) => {
      if (category) {
        setProductsList(res.filter((p) => p.category === category));
        setLoad(true);
      } else {
        setProductsList(res);
        setLoad(true);
      }
    });
  }, [category]);

  return (
    <>
      <h1 className="greeting">{greeting}</h1>
      {load ? (
        <ItemList productsList={productsList} />
      ) : (
        <div className="spinner">
          <Spinner color="light"></Spinner>
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
