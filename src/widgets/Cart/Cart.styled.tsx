import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    background-color: hsla(240, 14%, 97%, 1);
    border-radius: 8px;
`;

export const CartContent = styled.div`
    padding: 12px 16px;

    @media screen and (min-width: 1000px) {
        padding: 32px 40px;
    }
`;

export const CartTitle = styled.h2`
    font-size: 18px;
    color: hsla(223, 10%, 24%, 1);
    font-weight: 600;
    line-height: 24px;

    margin-bottom: 16px;
`;

export const CartDescription = styled.p`
    font-size: 14px;
    color: hsla(223, 10%, 24%, 1);
    font-weight: 500;
    line-height: 24px;

    margin-bottom: 16px;
`;

export const Delimiter = styled.div`
    width: 100%;
    height: 0;

    margin: 16px 0;

    border: 1px solid hsla(225, 19%, 90%, 1);
`;

export const Summary = styled.p`
    font-size: 16px;
    color: hsla(223, 10%, 24%, 1);
    font-weight: 500;
    line-height: 24px;

    text-align: end;
`;

export const CartItemTitle = styled(CartDescription)`
    margin-bottom: unset;
    line-height: 20px;
`;

export const CartItemDescription = styled.p`
    font-size: 12px;
    line-height: 16px;

    margin-top: 2px;

    color: hsla(225, 7%, 51%, 1);
`;
