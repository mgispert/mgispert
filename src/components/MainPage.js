import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

export const MainPage = ({ showAbout, showProjects, showContact }) => {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading>
            <Text variant="heading">Hi, I'm MGispert,</Text>

            <br />
            <Text
              variant="heading"
              as={"span"}
              bgGradient="linear(to-l,#C4F1F9, #00A3C4 )"
              bgClip="text"
            >
              web developer.
            </Text>
          </Heading>
          <br />
          <Text color={"white"} variant="main">
            Full-Stack developer with Dr.Frankenstein's Syndrome - <br />I love
            bringing ideas to life!
          </Text>
          <br />
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              variant="solid"
              onClick={() => {
                showAbout(true);
                showProjects(false);
                showContact(false);
              }}
            >
              About me
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
