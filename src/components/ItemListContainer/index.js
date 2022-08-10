import "./style.scss";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    image:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/936/837/products/puffer1-6e0d841842a80e198e16542179615487-1024-1024.jpg",
    name: "Virtual love",
    category: "Camperas",
    price: 20000,
    stock: 40,
  },
  {
    id: 2,
    image:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/936/837/products/fl3j-noacaemnf91-ca91165aa62c6ac7fc16542167412250-1024-1024.jpg",
    name: "Thunder eye",
    category: "Buzos",
    price: 10500,
    stock: 30,
  },
  {
    id: 3,
    image:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/936/837/products/verde11-55f59be4ff7444bd6516550565302046-1024-1024.jpg",
    name: "Slime Fever",
    category: "Remeras",
    price: 3400,
    stock: 60,
  },
];

const ItemListContainer = ({ greeting }) => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const customFetch = new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
      }, 2000);
    });

    customFetch.then((res) => {
      setProductsList(res);
      setLoading(false);
    });

    customFetch.catch((rej) => {
      console.log("Termino mal");
    });
  }, []);

  return (
    <>
      <h1 className="greeting">{greeting}</h1>
      <ItemCount initial={1} stock={20} onAdd={() => {}} />
      {!loading ? (
        <ItemList products={products} />
      ) : (
        <p className="load">Cargando...</p>
      )}
    </>
  );
};

export default ItemListContainer;
