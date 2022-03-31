import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const AboutMePage = ({ showProjects, showAbout, showContact }) => {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"space-enely"}
      alignItems={"center"}
      gap={"3rem"}
      height="100%"
      marginTop="3rem"
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        textAlign="left"
        marginBottom="3rem"
      >
        About{" "}
        <Text as={"span"} color={"cyan.500"}>
          MGispert
        </Text>
      </Heading>

      <Box
        maxWidth={"60%"}
        lineHeight={"3rem"}
        textAlign="left"
        letterSpacing={"3px"}
        fontSize="17px"
        margin="0 auto"
      >
        <Text>
          I'm a Full-Stack Developer based in Barcelona. I have a background in
          Education.
          <br />
          Yes, I was one of those high-school teachers that you remember when
          you get older.
        </Text>
        <Text>
          My passion for teaching and helping students exploded when I got into
          the tech world, I discovered I could bring ideas to life and help
          other people do the same, they just need to hand me a concept.
        </Text>
        <Text>
          I'm a fan of list-creating, English Literature, and mythology. To sum
          up, I'm a geek.
          <br />
          Do you want to see what I can do?
        </Text>
      </Box>

      <Button
        colorScheme={"blue"}
        bg={"cyan.500"}
        rounded={"full"}
        px={6}
        onClick={() => {
          showAbout(false);
          showProjects(true);
          showContact(false);
        }}
        _hover={{
          bg: "cyan.200",
          boxShadow: "#9decf9 0px 0px 17px 10px ",
        }}
      >
        Check my last projects
      </Button>
    </Flex>
  );
};
