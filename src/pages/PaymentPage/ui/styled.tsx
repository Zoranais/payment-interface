import styled from "styled-components";

export const PaymentPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;
`;

export const PaymentPageContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 0;
    grid-row-gap: 32px;

    @media screen and (min-width: 1000px) {
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(1, auto);
    }
`;

export const BackButton = styled.button`
    width: 40px;
    height: 40px;

    outline: none;
    background-color: transparent;
    border: none;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    color: hsla(223, 10%, 24%, 1);
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: calc(100% - 32px);

    @media screen and (min-width: 1000px) {
        max-width: 862px;
    }

    padding: 16px;
`;

export const HeaderTitle = styled.h2`
    font-weight: 600;
    font-size: 18px;

    line-height: 32px;
    align-self: center;

    color: hsla(223, 10%, 24%, 1);
`;

export const LanguageOption = styled.button<{ active?: boolean }>`
    outline: none;
    background-color: transparent;
    border: none;

    width: 40px;

    cursor: pointer;

    font-weight: 500;
    font-size: 14px;

    color: ${(props) => (props.active ? "hsla(223, 10%, 24%, 1)" : "hsla(224, 10%, 72%, 1)")};
`;

export const FooterContainer = styled.div`
    padding-top: 32px;
    padding-bottom: 40px;

    font-weight: 500;
    font-size: 14px;

    color: hsla(223, 9%, 44%, 1);

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: auto;

    gap: 4px;
`;

export const DesktopTitle = styled.div`
    display: flex;
    align-items: center;

    position: relative;
    padding: 0 0 16px 0;

    ${BackButton} {
        position: absolute;
        left: -40px;

        color: black;
    }

    ${HeaderTitle} {
        line-height: 40px;
    }
`;

export const Section = styled.div`
    width: 420px;
    padding: 0 16px;

    @media screen and (min-width: 1000px) {
        max-width: 420px;
        width: calc(50%-32px);
    }
`;
