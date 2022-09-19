import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,*:before, *:after{
    margin : 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

export default GlobalStyles;
