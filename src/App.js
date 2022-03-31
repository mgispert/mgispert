import { AboutMePage } from "./components/AboutMePage";
import { ContactMePage } from "./components/ContactMePage";
import { Footer } from "./components/Footer";
import { MainPage } from "./components/MainPage";
import { Navbar } from "./components/Navbar";
import { ProjectsPage } from "./components/ProjectsPage";

import { Flex } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [isAboutShown, showAbout] = useState(false);
  const [isProjectsShown, showProjects] = useState(false);
  const [isContactShown, showContact] = useState(false);

  return (
    <Flex className="App" flexDir="column" height="100%" flex="1">
      <Navbar
        showAbout={showAbout}
        showProjects={showProjects}
        showContact={showContact}
      />
      {isAboutShown ? (
        <AboutMePage
          showAbout={showAbout}
          showProjects={showProjects}
          showContact={showContact}
        />
      ) : isProjectsShown ? (
        <ProjectsPage />
      ) : isContactShown ? (
        <ContactMePage />
      ) : (
        <MainPage
          showAbout={showAbout}
          showProjects={showProjects}
          showContact={showContact}
        />
      )}
      <Footer />
    </Flex>
  );
}

export default App;
