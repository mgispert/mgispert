import { SiLinkedin, SiGithub } from "react-icons/si";

import {
  Flex,
  Button,
  Center,
  Stack,
  Text,
  Heading,
  Link,
} from "@chakra-ui/react";

export const ContactMePage = () => {
  return (
    <Flex
      p={8}
      flexDir={"column"}
      justifyContent="center"
      alignItems="center"
      padding="0 2rem"
      height="100%"
    >
      <Heading
        lineHeight={"5rem"}
        marginBottom="5rem"
        as={Flex}
        alignItems="end"
      >
        <Text variant="heading">Come by and say&nbsp;</Text>
        <Text
          variant="heading"
          bgGradient="linear(to-l,#C4F1F9, #00A3C4 )"
          bgClip="text"
        >
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
          gap={" 2rem"}
          justifyContent={" center"}
          alignItems={" center"}
          flexWrap="wrap"
        >
          <Button
            variant="outline"
            target={"_blank"}
            _hover={{ borderTop: "none", textDecor: "none" }}
            as={Link}
            href="https://www.linkedin.com/in/mgispert/"
            w={"full"}
            leftIcon={<SiLinkedin />}
          >
            <Center>
              <Text variant="main">/mgispert</Text>
            </Center>
          </Button>
          <Button
            variant="outline"
            target={"_blank"}
            _hover={{ borderTop: "none", textDecor: "none" }}
            as={Link}
            href="https://github.com/mgispert"
            w={"full"}
            leftIcon={<SiGithub />}
          >
            <Center>
              <Text variant="main">/mgispert</Text>
            </Center>
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
};
