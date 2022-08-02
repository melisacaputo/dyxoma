import "./index.scss";
import ItemCount from "../ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h1 className="greeting">{greeting}</h1>
      <ItemCount initial={1} stock={20} onAdd={() => {}} />
    </>
  );
};

export default ItemListContainer;
