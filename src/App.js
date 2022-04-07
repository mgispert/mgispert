import { AboutMePage } from "./components/AboutMePage";
import { ContactMePage } from "./components/ContactMePage";
import { Footer } from "./components/Footer";
import { MainPage } from "./components/MainPage";
import { Navbar } from "./components/Navbar";
import { ProjectsPage } from "./components/ProjectsPage";

import { Flex } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("main");

  return (
    <Flex className="App" flexDir="column" height="100%" flex="1">
      <Navbar
        onClickProjects={() => setScreen("projects")}
        onClickAbout={() => setScreen("about")}
        onClickContact={() => setScreen("contact")}
        onClickMain={() => setScreen("main")}
      />
      {screen === "about" ? (
        <AboutMePage onClickProjects={() => setScreen("projects")} />
      ) : screen === "projects" ? (
        <ProjectsPage />
      ) : screen === "contact" ? (
        <ContactMePage />
      ) : (
        <MainPage onClickAbout={() => setScreen("about")} />
      )}
      <Footer />
    </Flex>
  );
}

export default App;
