import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../Logo/logo.webp";
import { px } from "framer-motion";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="1%">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
