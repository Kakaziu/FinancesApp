import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: monospace;
  }

  body, html {
    height: 100%;
  }

  body {
    position: relative;
  }
`