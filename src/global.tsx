import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

export default createGlobalStyle`
    ${reset}
    * {
        font-family: "Inter", sans-serif;
        font-weight: normal;
    }    
`;
