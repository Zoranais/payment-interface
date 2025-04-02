import { z } from "zod";
import { useAppForm } from "../../shared/hooks/useAppForm";
import Button from "../../shared/ui/Button/Button";
import { ApplePay } from "../../shared/ui/SVG/SVG";
import { PaymentFormProps } from "./PaymentForm.props";
import {
    Description,
    Divider,
    FormHeading,
    FormHeadingText,
    FormSecondaryHeading,
    InputSection,
    PaymentFormContainer,
    Section,
    SectionSeparator,
} from "./PaymentForm.styled";
import { validateLuhn } from "../../shared/utils/cardNumberUtils";

const paymentFormValidator = z.object({
    cardNumber: z.string().min(14, "Invalid card number").max(23, "Invalid card number").refine(validateLuhn, "Invalid card number"),
    cvc: z.string().length(3, "Invalid CVC value"),
    expDate: z.string().length(5, "Invalid expiration date"),
});

const PaymentForm = ({ trialDuration, price, currency, applePayLoading, handleApplePayClick, handleFormSubmit }: PaymentFormProps) => {
    const form = useAppForm({
        defaultValues: {
            cardNumber: "",
            cvc: "",
            expDate: "",
        },
        validators: {
            onSubmit: paymentFormValidator,
        },
        onSubmit: async ({ value }) => {
            await handleFormSubmit(value);
        },
        onSubmitInvalid: ({ value, formApi }) => {
            console.warn("invalid form data", value, formApi.getAllErrors());
        },
    });

    return (
        <PaymentFormContainer>
            <FormHeading>
                <FormHeadingText>{trialDuration} days free</FormHeadingText>
                <FormSecondaryHeading>
                    then {price} {currency} per 14 days
                </FormSecondaryHeading>
            </FormHeading>
            <Button loading={applePayLoading} variant="secondary" onClick={handleApplePayClick} loadingChildren={"Processing payment"}>
                <ApplePay />
            </Button>
            <SectionSeparator>
                <Divider />
                <p>or pay with card</p>
                <Divider />
            </SectionSeparator>
            <Section>
                <InputSection>
                    <form.AppField name="cardNumber" children={(field) => <field.CardNumberInput />} />
                </InputSection>
                <InputSection>
                    <form.AppField name="expDate" children={(field) => <field.ExpirationDateInput />} />
                    <form.AppField name="cvc" children={(field) => <field.CVCInput />} />
                </InputSection>
            </Section>
            <form.AppForm>
                <form.SubscribeButton label="Start Trial" loadingText={"Processing payment"} />
            </form.AppForm>
            <Description>
                You'll have your <b>Plan Pro during 1 year</b>. After this period of time, your plan will be <b>automatically renewed</b> with its original
                price without any discounts applied.
            </Description>
        </PaymentFormContainer>
    );
};

export default PaymentForm;
