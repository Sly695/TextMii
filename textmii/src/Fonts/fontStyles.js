import { createGlobalStyle } from "styled-components";
import Kodchasan from "../Fonts/Kodchasan Bold.woff";
import Kodchasan2 from "../Fonts/Kodchasan Bold.woff2";

const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'Kodchasan';
    src: local('Kodchasan'), local('Kodchasan'),
    url(${Kodchasan2}) format('woff2'),
    url(${Kodchasan}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
  `;

export default FontStyles;