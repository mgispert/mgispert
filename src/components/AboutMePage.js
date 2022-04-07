import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const AboutMePage = ({ onClickProjects }) => {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"space-enely"}
      alignItems={"center"}
      gap={"3rem"}
      marginTop="3rem"
    >
      <Heading
        textAlign="left"
        marginBottom={{ base: "0", sm: "1rem", md: "1rem" }}
        as={Flex}
      >
        <Text variant="heading">About&nbsp;</Text>
        <Text
          as={"span"}
          variant="heading"
          bgGradient="linear(to-l,#C4F1F9, #00A3C4 )"
          bgClip="text"
        >
          MGispert
        </Text>
      </Heading>

      <Box maxWidth={"60%"} textAlign="left" margin="0 auto">
        <Text variant="main">
          I'm a Full-Stack Developer based in Barcelona. I have a background in
          Education.
          <br />
          Yes, I was one of those high-school teachers that you remember when
          you get older.
        </Text>
        <Text variant="main">
          My passion for teaching and helping students exploded when I got into
          the tech world, I discovered I could bring ideas to life and help
          other people do the same, they just need to hand me a concept.
        </Text>
        <Text variant="main">
          I'm a fan of list-creating, English Literature, and mythology. To sum
          up, I'm a geek.
          <br />
          Do you want to see what I can do?
        </Text>
      </Box>

      <Button
        variant="solid"
        padding="1rem"
        px={6}
        onClick={onClickProjects}
        marginBottom={{ base: "1rem", sm: "2rem", md: "2rem" }}
      >
        Check my last projects
      </Button>
    </Flex>
  );
};
