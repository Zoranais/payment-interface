import { useCallback, useState } from "react";
import { toast } from "react-toastify";

const useApplePayPayMutation = () => {
    const [loading, setLoading] = useState(false);

    const mutationCallback = useCallback(async () => {
        if (loading) return;
        try {
            setLoading(true);

            await new Promise<void>((resolve) => setTimeout(resolve, 2000));
            toast.success("Payment successful");
        } catch {
            toast.error("Payment unsuccessful");
        } finally {
            setLoading(false);
        }
    }, [loading]);

    return { loading, mutationCallback };
};

export default useApplePayPayMutation;
