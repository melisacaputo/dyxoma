import { Spinner } from "reactstrap";
import ItemDetail from "../ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsCollection } from "../../utils/firebase";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [load, setLoad] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const reference = doc(productsCollection, id);
    const consult = getDoc(reference);

    consult
      .then((res) => {
        setSelectedProduct({
          ...res.data(),
          id: res.id,
        });
        setLoad(true);
      })
      .catch((err) => {
        console.log(err);
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
