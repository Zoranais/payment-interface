import styled from "styled-components";

export const PaymentFormContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
`;

export const FormHeading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 1000px) {
        align-items: start;
    }

    margin-bottom: 24px;
`;

export const FormHeadingText = styled.h3`
    color: hsla(223, 10%, 24%, 1);

    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
`;

export const FormSecondaryHeading = styled.h4`
    color: hsla(223, 10%, 24%, 1);

    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
`;

export const InputSection = styled.div`
    display: flex;
    gap: 8px;

    width: 100%;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;

    gap: 12px;
    padding-bottom: 16px;
`;

export const SectionSeparator = styled.div`
    display: flex;

    width: 100%;
    gap: 16px;

    color: hsla(223, 9%, 44%, 1);
    font-size: 14px;
    line-height: 24px;

    align-items: center;

    padding-top: 24px;
    padding-bottom: 16px;

    p {
        min-width: 110px;
    }
`;

export const Divider = styled.span`
    border: 1px solid hsla(228, 17%, 91%, 1);
    width: 100%;
    height: 0;
`;

export const Description = styled.div`
    margin-top: 8px;

    padding: 16px 12px;

    color: hsla(223, 9%, 44%, 1);
    font-size: 12px;
    line-height: 16px;
    font-weight: 400px;

    border-radius: 8px;
    border: 1px solid hsla(228, 17%, 91%, 1);

    b {
        font-weight: 600;
    }
`;
