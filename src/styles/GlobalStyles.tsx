import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, ::after, ::before {
  box-sizing: border-box;
}

body {
  padding: 20px;
  background-color: #1d1d1d;
  font-family: "Poppins";
  min-height: 100vh;
  color: #fff;
}

h1,h2{
  padding: 0;
  margin: 0;
}

ol, ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

a, :visited {
text-decoration: none;
color: inherit;
}

`;

export default GlobalStyles;
