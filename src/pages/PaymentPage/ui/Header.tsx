import { useState } from "react";
import { Back } from "../../../shared/ui/SVG/SVG";
import { BackButton, HeaderContainer, HeaderTitle, LanguageOption } from "./styled";
import useIsMobile from "../../../shared/hooks/useIsMobile";

const availableLanguages = [
    { id: "en", title: "Eng" },
    { id: "ua", title: "Укр" },
];

const Header = () => {
    const [language, setLanguage] = useState(availableLanguages[0]);

    const isMobile = useIsMobile();

    const handleLanguageChange = () => {
        const index = availableLanguages.findIndex((x) => x.id === language.id);

        if (index >= availableLanguages.length - 1) {
            setLanguage(availableLanguages[0]);
        } else {
            setLanguage(availableLanguages[index + 1]);
        }
    };

    return (
        <HeaderContainer>
            {isMobile && (
                <>
                    <BackButton>
                        <Back />
                    </BackButton>
                    <HeaderTitle>Checkout</HeaderTitle>
                </>
            )}
            {isMobile ? (
                <LanguageOption onClick={handleLanguageChange} active>
                    {language.title}
                </LanguageOption>
            ) : (
                <div style={{ marginLeft: "auto" }}>
                    {availableLanguages.map((x) => (
                        <LanguageOption onClick={() => setLanguage(x)} active={x.id === language.id}>
                            {x.title}
                        </LanguageOption>
                    ))}
                </div>
            )}
        </HeaderContainer>
    );
};

export default Header;
