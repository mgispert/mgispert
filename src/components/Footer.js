import React from "react";
import { Flex, Text, Container } from "@chakra-ui/react";
import { FaGhost } from "react-icons/fa";

export const Footer = () => {
  return (
    <Container
      as={Flex}
      justifyContent={"center"}
      alignItems={"center"}
      position="relative"
      paddingTop={"1rem"}
    >
      <Text margin={"5px"} variant="main">
        MGispert 2022 &nbsp;{" "}
      </Text>
      <FaGhost />
    </Container>
  );
};
