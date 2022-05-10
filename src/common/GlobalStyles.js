import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    body { background-color: rgb(240, 242, 245); }
`;

export default GlobalStyles;
