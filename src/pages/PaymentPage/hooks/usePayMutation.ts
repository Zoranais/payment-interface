import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { CardInfo } from "../../../shared/types/cardInfo";

const usePayMutation = () => {
    const [loading, setLoading] = useState(false);

    const mutationCallback = useCallback(
        async (data: CardInfo) => {
            if (loading) return;
            try {
                setLoading(true);
                await new Promise<void>((resolve) => setTimeout(resolve, 2000));
                if (data.cardNumber[data.cardNumber.length - 1] === "5") {
                    throw new Error();
                }

                toast.success("Payment successful");
            } catch {
                toast.error("Payment unsuccessful");
            } finally {
                setLoading(false);
            }
        },
        [loading]
    );

    return { loading, mutationCallback };
};

export default usePayMutation;
