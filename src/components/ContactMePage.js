import { SiLinkedin, SiWhatsapp, SiGithub } from "react-icons/si";
import { BsEnvelopeOpen } from "react-icons/bs";

import {
  Flex,
  Button,
  Center,
  Stack,
  Text,
  Heading,
  Box,
  Link,
} from "@chakra-ui/react";

export const ContactMePage = () => {
  return (
    <Flex
      p={8}
      flexDir={"column"}
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        lineHeight={"5rem"}
        marginBottom="5rem"
      >
        Come by and say
        <br />
        <Text as={"span"} color={"cyan.500"}>
          hello!
        </Text>
      </Heading>
      <Stack
        spacing={2}
        align={"center"}
        maxW={"md"}
        w={"full"}
        display={"flex"}
        flexDirection={"row"}
        gap={"3rem"}
        justifyContent={"center"}
        alignItems={"baseline"}
      >
        <Flex
          flexDirection={" column"}
          gap={" 2rem"}
          justifyContent={" center"}
          alignItems={" center"}
        >
          <Button
            as={Box}
            w={"full"}
            colorScheme={"whatsapp"}
            leftIcon={<SiWhatsapp />}
            _hover={{
              bg: "green.200",
              boxShadow: "#9ae6b4 0px 0px 17px 10px ",
            }}
          >
            <Center>
              <Text>0034 650577215</Text>
            </Center>
          </Button>
          <Button
            as={Box}
            w={"full"}
            variant={"outline"}
            leftIcon={<BsEnvelopeOpen />}
            _hover={{
              bg: "#1a202c",
              boxShadow: "#3f444e 0px 0px 17px 10px ",
            }}
          >
            <Center>
              <Text>mcg-511@hotmail.com</Text>
            </Center>
          </Button>
        </Flex>
        <Flex
          flexDirection={" column"}
          gap={" 2rem"}
          justifyContent={" center"}
          alignItems={" center"}
        >
          <Button
            as={Link}
            href="https://www.linkedin.com/in/mgispert/"
            w={"full"}
            colorScheme={"messenger"}
            leftIcon={<SiLinkedin />}
            _hover={{
              bg: "rgb(162 205 255)",
              boxShadow: "rgb(162 205 255) 0px 0px 17px 10px ",
            }}
          >
            <Center>
              <Text>/mgispert</Text>
            </Center>
          </Button>
          <Button
            as={Link}
            href="https://github.com/mgispert"
            w={"full"}
            variant={"outline"}
            leftIcon={<SiGithub />}
            _hover={{
              bg: "#1a202c",
              boxShadow: "#3f444e 0px 0px 17px 10px ",
            }}
          >
            <Center>
              <Text>/mgispert</Text>
            </Center>
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
};
