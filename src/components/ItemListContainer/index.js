import "./style.scss";
import { Spinner } from "reactstrap";
import ItemList from "../ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsCollection } from "../../utils/firebase";
import { getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [productsList, setProductsList] = useState([]);
  const [load, setLoad] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    if (!category) {
      getDocs(productsCollection)
        .then((snapshot) => {
          const products = snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          });
          setProductsList(products);
          setLoad(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const filter = query(
        productsCollection,
        where("category", "==", category)
      );

      getDocs(filter)
        .then((snapshot) => {
          const products = snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          });
          setProductsList(products);
          setLoad(true);
        })
        .catch((err) => {
          console.log(err);
        });
      setLoad(false);
    }
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
