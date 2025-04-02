import { useFormContext } from "../../hooks/useAppForm";
import Button from "../Button/Button";

const SubscribeButton = ({ label, loadingText }: { label: string; loadingText?: string }) => {
    const form = useFormContext();
    return (
        <form.Subscribe selector={(state) => state.isSubmitting}>
            {(isSubmitting) => (
                <Button onClick={form.handleSubmit} loading={isSubmitting} loadingChildren={loadingText}>
                    {label}
                </Button>
            )}
        </form.Subscribe>
    );
};

export default SubscribeButton;
