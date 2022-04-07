import {
  Heading,
  Text,
  Flex,
  List,
  ListItem,
  ListIcon,
  Link,
} from "@chakra-ui/react";
import { RiGameLine } from "react-icons/ri";
import { FiCoffee } from "react-icons/fi";
import { GiMirrorMirror } from "react-icons/gi";
import { FaPaw, FaRegHandshake } from "react-icons/fa";
import { CheckIcon } from "@chakra-ui/icons";
import "./ProjectsPage.css";

export const ProjectsPage = () => {
  return (
    <Flex
      flexDir={"column"}
      justifyContent="space-evenly"
      alignItems="center"
      marginTop={{ base: "2rem", sm: "2rem", md: "2rem" }}
    >
      <Heading
        lineHeight={{ base: "1rem", sm: "2rem", md: "4rem" }}
        marginBottom="7rem"
      >
        <Text variant="heading">Check out my last</Text>

        <br />
        <Text
          variant="heading"
          as={"span"}
          bgGradient="linear(to-l,#C4F1F9, #00A3C4 )"
          bgClip="text"
        >
          projects!
        </Text>
      </Heading>

      <Flex
        justifyContent="center"
        alignItems="center"
        gap="5rem"
        flexWrap="wrap"
        marginBottom="3rem"
        marginRight={{ base: "2.5rem", sm: "0", md: "0" }}
      >
        <Link
          target={"_blank"}
          href="https://mgispert.github.io/squareMatch/"
          _hover={{ textDecor: "none" }}
          _focus={{ borderColor: "none" }}
        >
          <Flex
            p={4}
            flexDir="column"
            justifyContent={"flex-start"}
            textAlign="left"
            className="card"
            maxWidth={{ base: "11rem", sm: "13rem", md: "15rem" }}
            height={{ base: "15rem", sm: "17rem", md: "20rem" }}
            overflow={{ base: "scroll", sm: "scroll", md: "unset" }}
          >
            <Text
              variant="card"
              fontWeight={600}
              as={Flex}
              justifyContent="space-evenly"
              alignItems="center"
              color="white"
            >
              <RiGameLine />
              SQUARE MATCH
              <RiGameLine />
            </Text>
            <br />
            <Text variant="card">
              Memory game created with CSS, HTML, and JavaScript
              <List marginTop={"1rem"}>
                <ListItem>
                  <ListIcon as={CheckIcon} /> Responsive Design
                </ListItem>
              </List>
            </Text>
          </Flex>
        </Link>
        <Link
          target={"_blank"}
          href="https://dozema-coffee.herokuapp.com/"
          _hover={{ textDecor: "none" }}
          _focus={{ borderColor: "none" }}
        >
          <Flex
            p={4}
            flexDir="column"
            justifyContent="flex-start"
            maxWidth={{ base: "11rem", sm: "13rem", md: "15rem" }}
            height={{ base: "15rem", sm: "17rem", md: "20rem" }}
            overflow={{ base: "scroll", sm: "scroll", md: "unset" }}
            textAlign="left"
            className="card"
          >
            <Text
              color="white"
              variant="card"
              fontWeight={600}
              as={Flex}
              justifyContent="space-evenly"
              alignItems="center"
            >
              <FiCoffee />
              DoZeMa Coffee <FiCoffee />
            </Text>
            <br />
            <Text variant="card">
              Workplace finder created with Bootstap, HandleBars, Express.js,
              Node.js, JS, and MongoDB
              <List marginTop={"1rem"}>
                <ListItem>
                  <ListIcon as={CheckIcon} /> CRUD Functionality
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} /> Desktop Web Design
                </ListItem>
                <ListItem>
                  <ListIcon as={FaRegHandshake} /> Collaboration Project
                </ListItem>
              </List>
            </Text>
          </Flex>
        </Link>
        <Link
          target={"_blank"}
          href="https://mirrorcare.netlify.app/"
          _hover={{ textDecor: "none" }}
          _focus={{ borderColor: "none" }}
        >
          <Flex
            p={4}
            flexDir="column"
            justifyContent="flex-start"
            textAlign="left"
            className="card"
            maxWidth={{ base: "11rem", sm: "13rem", md: "15rem" }}
            height={{ base: "15rem", sm: "17rem", md: "20rem" }}
            overflow={{ base: "scroll", sm: "scroll", md: "unset" }}
          >
            <Text
              variant="card"
              color="white"
              fontWeight={600}
              as={Flex}
              justifyContent="space-evenly"
              alignItems="center"
            >
              <GiMirrorMirror /> Mirror <GiMirrorMirror />
            </Text>
            <br />
            <Text variant="card">
              Mental health web app created with Chakra UI, HTML, Express.js,
              Node.js, React.js, MongoDB, and JS
              <List marginTop={"1rem"}>
                <ListItem>
                  <ListIcon as={CheckIcon} /> MERN Application
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} />
                  Responsive Design
                </ListItem>
              </List>
            </Text>
          </Flex>
        </Link>
        <Link
          target={"_blank"}
          href="https://mgispert-catlery-backercamp.vercel.app/"
          _hover={{ textDecor: "none" }}
          _focus={{ borderColor: "none" }}
        >
          <Flex
            p={4}
            flexDir="column"
            justifyContent="flex-start"
            maxWidth={{ base: "11rem", sm: "13rem", md: "15rem" }}
            height={{ base: "15rem", sm: "17rem", md: "20rem" }}
            overflow={{ base: "scroll", sm: "scroll", md: "unset" }}
            textAlign="left"
            className="card"
          >
            <Text
              variant="card"
              color="white"
              fontWeight={600}
              as={Flex}
              justifyContent="space-evenly"
              alignItems="center"
            >
              <FaPaw /> Catlery <FaPaw />
            </Text>
            <br />
            <Text variant="card">
              Cat Gallery created with Chakra UI, React.js, Redux, Redux Saga,
              and JavaScript
              <List marginTop={"1rem"}>
                <ListItem>
                  <ListIcon as={CheckIcon} /> REST API inclusion
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} /> Responsive Design
                </ListItem>
                <ListItem>
                  <ListIcon as={FaRegHandshake} /> Collaboration Project
                </ListItem>
              </List>
            </Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};
