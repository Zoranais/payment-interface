import { Logo } from "../../../shared/ui/SVG/SVG";
import { FooterContainer } from "./styled";

const Footer = () => {
    return <FooterContainer>Powered by {<Logo />}</FooterContainer>;
};

export default Footer;
