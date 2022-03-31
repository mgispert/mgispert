import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Image,
  IconButton,
  Button,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CalendarIcon,
  ChatIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";

export const Navbar = ({ showAbout, showProjects, showContact }) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"1rem"}
    >
      <Button
        onClick={() => {
          showAbout(false);
          showProjects(false);
          showContact(false);
        }}
        bgColor="transparent"
        _hover={{ backgroundColor: "transparent" }}
        _active={{ backgroundColor: "transparent", borderColor: "transparent" }}
        _focus={{ backgroundColor: "transparent", borderColor: "transparent" }}
      >
        <Image src={"/images/ghostblue.png"} maxH="40px" />
      </Button>
      <Menu borderolor="#07b1d4" color="white">
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          borderColor={"#07b5d8"}
          backgroundColor={"#07b5d8"}
          borderRadius="50%"
          color="#c4f1f9"
          _hover={{
            boxShadow: "#9decf9 0px 0px 17px 10px ",
          }}
          _focus={{ borderColor: "transparent" }}
          _active={{
            borderColor: "#07b5d8",
            backgroundColor: "#07b5d8",
            boxShadow: "#9decf9 0px 0px 17px 10px ",
          }}
        />
        <MenuList color="white">
          <MenuItem
            icon={<InfoOutlineIcon />}
            onClick={() => {
              showAbout(true);
              showProjects(false);
              showContact(false);
            }}
          >
            About MGispert
          </MenuItem>
          <MenuItem
            icon={<CalendarIcon />}
            onClick={() => {
              showAbout(false);
              showProjects(true);
              showContact(false);
            }}
          >
            Last projects
          </MenuItem>
          <MenuItem
            icon={<ChatIcon />}
            onClick={() => {
              showAbout(false);
              showProjects(false);
              showContact(true);
            }}
          >
            Contact me
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
