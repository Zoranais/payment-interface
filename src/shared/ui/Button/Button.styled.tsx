import styled from "styled-components";

const variants = {
    primary: (isMobile?: boolean) => {
        return {
            color: {
                default: "hsl(144 97 27)",
                hover: "hsl(144 97 31)",
                pressed: isMobile ? "hsl(144 97 23)" : "hsl(144 97 27)",
                loading: "hsl(144 97 27)",
            },
            offset: {
                default: 0,
                hover: 2,
                pressed: -2,
                loading: 0,
            },
            borderRadius: 6,
        };
    },
    secondary: () => {
        return {
            color: {
                default: "hsl(0 0 0)",
                hover: "hsl(0 0 4)",
                pressed: "hsl(0 0 4)",
                loading: "hsl(0 0 0)",
            },
            offset: {
                default: 0,
                hover: 2,
                pressed: -2,
                loading: 0,
            },
            borderRadius: 3,
        };
    },
};

export const ButtonStyled = styled.button<{ isMobile: boolean; loading: boolean; variant: "primary" | "secondary" }>`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: none;
    width: 100%;

    height: 48px;

    cursor: pointer;

    transition: background-color 80ms ease-in, transform 80ms ease-in;

    border-radius: ${(props) => variants[props.variant ?? "primary"](props.isMobile).borderRadius}px;

    padding: 0 26px;

    .motion-content {
        position: absolute;

        display: flex;
        align-items: center;
        justify-content: center;

        gap: 12px;

        width: 100%;
        height: 100%;

        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        color: hsl(0 0 100);
    }

    background-color: ${(props) =>
        props.loading
            ? variants[props.variant ?? "primary"](props.isMobile).color.loading
            : variants[props.variant ?? "primary"](props.isMobile).color.default};
    transform: translateY(
        ${(props) =>
            props.loading
                ? variants[props.variant ?? "primary"](props.isMobile).offset.loading
                : variants[props.variant ?? "primary"](props.isMobile).offset.default}px
    );
    ${(props) =>
        !props.loading &&
        `
        &:hover {
            background-color: ${variants[props.variant ?? "primary"](props.isMobile).color.hover};
            transform: translateY(${variants[props.variant ?? "primary"](props.isMobile).offset.hover}px);
        }

        &:active {
            background-color: ${variants[props.variant ?? "primary"](props.isMobile).color.pressed};
            transform: translateY(${variants[props.variant ?? "primary"](props.isMobile).offset.pressed}px);
        }
        `};
`;
