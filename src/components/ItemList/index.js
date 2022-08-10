import Item from "../Item";
import "./style.scss";

const ItemList = ({ products }) => {
  return (
    <>
      <section className="products-container">
        {products.map((product) => {
          return <Item product={product} key={product.id} />;
        })}
      </section>
    </>
  );
};

export default ItemList;
