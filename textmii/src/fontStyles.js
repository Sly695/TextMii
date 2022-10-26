import { createGlobalStyle } from "styled-components";
import RobotoWoff from "..";

const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'Roboto Condensed';
    src: url(${RobotoWoff2}) format('woff2'),
         url(${RobotoWoff}) format('woff');
  }
  `;

export default FontStyles;