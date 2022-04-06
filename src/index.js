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
    heading: "Audiowide",
    body: "Raleway, sans-serif",
  },
  components: {
    Text: {
      variants: {
        main: {
          letterSpacing: "3px",
          fontSize: { base: "13px", sm: "15px", md: "16px" },
          lineHeight: "3rem",
          fontFamily: "Raleway, sans-serif",
        },
        heading: {
          fontFamily: "Audiowide",
          fontWeight: "600",
          fontSize: { base: "2xl", sm: "4xl", md: "6xl" },
        },
        card: {
          fontFamily: "Raleway, sans-serif",
          lineHeight: "1.75rem",
          fontSize: { base: "13px", sm: "15px", md: "16px" },
          color: "#9fadbf",
          backgroundColor: "rgb(26 32 44)",
        },
      },
    },

    Button: {
      variants: {
        outline: {
          letterSpacing: "3px",
          fontWeight: "light",
          width: "9rem",
          color: "white",
          borderRadius: "0px",
          borderColor: "transparent",
          backgroundColor: "transparent",
          fontSize: { base: "13px", sm: "15px", md: "16px" },
          transition: "border-color , ease-in-out",
          _hover: {
            borderTopColor: "cyan.300",
            color: "white",
            backgroundColor: "transparent",
            textDecoration: "none",
          },
          _active: {
            backgroundColor: "transparent",
            borderBottomColor: "cyan.300",
          },
          _focus: {
            borderColor: "transparent",
            borderBottomColor: "cyan.300",
            boxShadow: "transparent",
          },
        },
        solid: {
          letterSpacing: "3px",
          fontWeight: "light",
          width: "9rem",
          color: "white",
          borderRadius: "0px",
          borderWidth: "1px",
          borderColor: "cyan.300",
          borderBottomColor: "cyan.300",
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          backgroundColor: "transparent",
          fontSize: { base: "13px", sm: "15px", md: "16px" },
          transition: "width , letter-spacing, ease-in-out 1s",
          _hover: {
            width: "15rem",
            letterSpacing: "8px",
            backgroundColor: "transparent",
          },
          _active: {
            backgroundColor: "transparent",
          },
          _focus: {
            borderColor: "cyan.200",
            boxShadow: "transparent",
          },
        },
      },
      defaultProps: {
        variants: "outline",
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
