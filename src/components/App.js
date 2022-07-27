import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./NavBar";

function App() {
  return (
    <ChakraProvider>
      <NavBar />
    </ChakraProvider>
  );
}

export default App;
