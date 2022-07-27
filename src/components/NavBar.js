import logo from "../assets/logo.gif";
import { Heading, HStack, Link, Spacer } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <div>
        <HStack>
          <img src={logo} alt="logo marca" width="80px" />
          <Heading>DYXOMA</Heading>
          <Spacer />
          <HStack style={{ marginRight: 30 }}>
            <Link>Hoodies</Link>
            <Link>Remeras</Link>
            <Link>Tops</Link>
            <Link>Camperas</Link>
          </HStack>
        </HStack>
      </div>
    </>
  );
};

export default NavBar;
