import React from "react";
import {
  Image,
  Button,
  Flex,
  Link,
  useDisclosure,
  IconButton,
  Box,
  Stack,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

export const Navbar = ({
  onClickProjects,
  onClickAbout,
  onClickContact,
  onClickMain,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={{ base: "0.5rem", sm: "1rem", md: "2rem" }}
    >
      <Link onClick={onClickMain}>
        <Image
          src={"/images/ghostblue.png"}
          maxH={{ base: "30px", sm: "40px", md: "40px" }}
        />
      </Link>

      <Flex
        alignItems="center"
        justifyItems="center"
        gap={{ base: "0", sm: "1rem", md: "2rem" }}
        flexWrap="wrap"
        display={{ base: "none", md: "flex" }}
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
      <Flex justifyContent="center" alignItems="flex-start">
        {isOpen ? (
          <Box display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                key={"about"}
                onClick={onClickAbout}
                fontSize={{ base: "13px", sm: "15px" }}
              >
                About
              </Link>
              <Link
                key={"projects"}
                onClick={onClickProjects}
                fontSize={{ base: "13px", sm: "15px" }}
              >
                Projects
              </Link>
              <Link
                key={"contact"}
                onClick={onClickContact}
                fontSize={{ base: "13px", sm: "15px" }}
              >
                Contact
              </Link>
            </Stack>
          </Box>
        ) : null}
        <IconButton
          width="fit-content"
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          borderTop="none"
          borderBottom="none"
          _hover={{ transition: "none" }}
          _focus={{ borderLeft: "none", borderRight: "none" }}
        />
      </Flex>
    </Flex>
  );
};
