import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const mgispertTheme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      "html, body, #root": {
        height: "100%",
        outerWidth: "100%",
        flex: "1",
      },
      body: {
        backgroundColor: mode("gray.700")(props),
      },
    }),
  },
  fonts: {
    heading: "Rampart One, cursive",
    body: "Raleway, sans-serif",
  },
  components: {
    Buttons: {
      _hover: {
        backgroundColor: "cyan.200",
        boxShadow: "#9decf9 0px 0px 17px 10px ",
      },
    },
  },
});

ReactDOM.render(
  <ChakraProvider theme={mgispertTheme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);

export default mgispertTheme;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
