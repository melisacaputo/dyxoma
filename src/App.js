import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a la tienda online de Dyxoma :)" />
      <ItemDetailContainer />
    </>
  );
};

export default App;
