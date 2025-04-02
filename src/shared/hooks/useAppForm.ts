import { createFormHookContexts, createFormHook } from "@tanstack/react-form";
import CardNumberInput from "../ui/form-fields/CardNumberInput";
import CVCInput from "../ui/form-fields/CVCInput";
import ExpirationDateInput from "../ui/form-fields/ExpirationDateInput";
import SubscribeButton from "../ui/form-fields/SubscribeButton";

export const { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts();

export const { useAppForm, withForm } = createFormHook({
    fieldContext,
    formContext,
    fieldComponents: {
        CardNumberInput,
        CVCInput,
        ExpirationDateInput,
    },
    formComponents: {
        SubscribeButton,
    },
});
