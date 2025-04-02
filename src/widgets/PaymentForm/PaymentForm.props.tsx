import { CardInfo } from "../../shared/types/cardInfo";

export interface PaymentFormProps {
    trialDuration: number;
    price: number;
    currency: string;

    applePayLoading?: boolean;

    handleApplePayClick: () => void | Promise<void>;
    handleFormSubmit: (data: CardInfo) => void | Promise<void>;
}
