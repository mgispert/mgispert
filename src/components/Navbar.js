import React from "react";
import { Image, Button, Flex, Link } from "@chakra-ui/react";

export const Navbar = ({
  onClickProjects,
  onClickAbout,
  onClickContact,
  onClickMain,
}) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={{ base: "0.5rem", sm: "1rem", md: "2rem" }}
    >
      <Link onClick={onClickMain}>
        <Image
          src={"/images/ghostblue.png"}
          maxH={{ base: "70px", sm: "40px", md: "40px" }}
        />
      </Link>
      <Flex
        alignItems="center"
        justifyItems="center"
        gap={{ base: "0", sm: "1rem", md: "2rem" }}
        flexWrap="wrap"
      >
        <Button variant="outline" onClick={onClickAbout}>
          About
        </Button>
        <Button variant="outline" onClick={onClickProjects}>
          Projects
        </Button>
        <Button variant="outline" onClick={onClickContact}>
          Contact
        </Button>
      </Flex>
    </Flex>
  );
};
