import { Back } from "../../shared/ui/SVG/SVG";
import Cart from "../../widgets/Cart/Cart";
import PaymentForm from "../../widgets/PaymentForm/PaymentForm";
import useApplePayPayMutation from "./hooks/useApplePayPayMutation";
import usePayMutation from "./hooks/usePayMutation";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import { BackButton, DesktopTitle, HeaderTitle, PaymentPageContainer, PaymentPageContent, Section } from "./ui/styled";
import useIsMobile from "../../shared/hooks/useIsMobile";

const items = [
    { title: "Lamel Professional Smart Skin Compact Powder", description: "Пудра для лиця" },
    { title: "Lamel Professional Smart Skin Compact Powder", description: "Пудра для лиця" },
];

const PaymentPage = () => {
    const { loading: applePayLoading, mutationCallback: handleApplePay } = useApplePayPayMutation();
    const { mutationCallback: handlePay } = usePayMutation();

    const isMobile = useIsMobile();

    return (
        <PaymentPageContainer>
            <Header />
            <PaymentPageContent>
                <Section>
                    {!isMobile && (
                        <DesktopTitle>
                            <BackButton>
                                <Back />
                            </BackButton>
                            <HeaderTitle>Checkout</HeaderTitle>
                        </DesktopTitle>
                    )}
                    <PaymentForm
                        trialDuration={5}
                        currency="UAH"
                        price={299.99}
                        applePayLoading={applePayLoading}
                        handleApplePayClick={handleApplePay}
                        handleFormSubmit={handlePay}
                    />
                </Section>
                <Section>
                    <Cart orderInfo="Order title" description="Order description" currency="UAH" total={299.99} items={items} />
                </Section>
            </PaymentPageContent>
            <Footer />
        </PaymentPageContainer>
    );
};

export default PaymentPage;
