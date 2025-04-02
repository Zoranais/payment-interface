import styled from "styled-components";

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    width: 100%;
`;

export const Label = styled.label`
    font-size: 12px;
    color: hsl(220, 10%, 30%);
    font-weight: 500;
`;

export const InputField = styled.input<{ hasError: boolean }>`
    padding: 10px 12px;

    font-size: 16px;
    color: hsl(220, 10%, 30%);
    font-weight: 400;

    width: 100%;

    border-radius: 6px;
    border: 1px solid ${({ hasError }) => (hasError ? "hsl(0, 70%, 50%)" : "hsla(226, 10%, 80%, 1)")};
    outline: none;
    box-sizing: border-box;
`;

export const TooltipIcon = styled.div`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    display: flex;
    align-items: center;
`;

export const Tooltip = styled.div`
    border-radius: 6px;
    background-color: hsla(240, 14%, 97%, 1);
    color: hsl(220, 10%, 30%);

    z-index: 1000;

    max-width: 250px;
    padding: 6px;

    font-size: 12px;
`;

export const ErrorText = styled.span`
    font-size: 12px;
    color: hsl(0, 70%, 50%);
    font-weight: 400;
`;
