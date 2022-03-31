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
      height="100%"
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        lineHeight={"5rem"}
        marginBottom="7rem"
      >
        Check out my last
        <br />
        <Text as={"span"} color={"cyan.500"}>
          projects!
        </Text>
      </Heading>

      <Flex
        justifyContent="center"
        alignItems="center"
        gap="5rem"
        flexWrap="wrap"
        marginBottom="3rem"
      >
        <Link
          target={"_blank"}
          href="https://mgispert.github.io/squareMatch/"
          _hover={{ textDecor: "none" }}
        >
          <Flex
            p={4}
            flexDir="column"
            justifyContent={"flex-start"}
            maxW="15rem"
            height="20rem"
            textAlign="left"
            className="card"
          >
            <Text
              fontWeight={600}
              as={Flex}
              justifyContent="space-evenly"
              alignItems="center"
            >
              <RiGameLine />
              SQUARE MATCH
              <RiGameLine />
            </Text>
            <br />
            <Text color={"gray.400"} lineHeight="2rem">
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
        >
          <Flex
            p={4}
            flexDir="column"
            justifyContent="flex-start"
            maxW="15rem"
            height="20rem"
            textAlign="left"
            className="card"
          >
            <Text
              fontWeight={600}
              as={Flex}
              justifyContent="space-evenly"
              alignItems="center"
            >
              <FiCoffee />
              DoZeMa Coffee <FiCoffee />
            </Text>
            <br />
            <Text color={"gray.400"} lineHeight="2rem">
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
        >
          <Flex
            p={4}
            flexDir="column"
            justifyContent="flex-start"
            maxW="15rem"
            height="20rem"
            textAlign="left"
            className="card"
          >
            <Text
              fontWeight={600}
              as={Flex}
              justifyContent="space-evenly"
              alignItems="center"
            >
              <GiMirrorMirror /> Mirror <GiMirrorMirror />
            </Text>
            <br />
            <Text color={"gray.400"} lineHeight="2rem">
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
        >
          <Flex
            p={4}
            flexDir="column"
            justifyContent="flex-start"
            maxW="15rem"
            height="20rem"
            textAlign="left"
            className="card"
          >
            <Text
              fontWeight={600}
              as={Flex}
              justifyContent="space-evenly"
              alignItems="center"
            >
              <FaPaw /> Catlery <FaPaw />
            </Text>
            <br />
            <Text color={"gray.400"} lineHeight="2rem">
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
